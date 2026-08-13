import express from 'express';
import cors from 'cors';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

import { config } from './config.js';
import { catalogService } from './services/catalogService.js';
import { orderService } from './services/orderService.js';
import { authService } from './services/authService.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '100kb' }));

const loginSchema = z.object({
  email: z.email({ message: 'Informe um e-mail válido.' }),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

const orderSchema = z.object({
  customerName: z.string().min(2, 'Informe o nome do cliente.'),
  phone: z.string().min(8, 'Informe um telefone válido.'),
  deliveryMethod: z.enum(['Retirada', 'Entrega']),
  items: z.array(
    z.object({
      productId: z.string().min(1, 'Produto inválido.'),
      product: z.string().min(1, 'Produto inválido.'),
      quantity: z.string().optional(),
      quantityNumber: z.number().positive().optional(),
      unitPrice: z.number().nonnegative(),
      subtotal: z.number().nonnegative(),
      filling: z.string().optional(),
      selectedComboItems: z.record(z.any()).nullable().optional(),
    })
  ).min(1, 'Escolha pelo menos um produto.'),
  desiredDate: z.string().optional(),
  paymentMethod: z.string().optional(),
  address: z.string().optional(),
  pickupDate: z.string().optional(),
  pickupTime: z.string().optional(),
  pickupPerson: z.string().optional(),
  pickupDocument: z.string().optional(),
  notes: z.string().optional(),
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'chock-trufas-api' });
});

app.get('/api/catalog', async (_req, res) => {
  const catalog = await catalogService.getCatalog();
  res.json(catalog);
});

app.post('/api/login', async (req, res, next) => {
  try {
    const payload = loginSchema.parse(req.body);
    const token = await authService.login(payload.email, payload.password);

    res.json({ token });
  } catch (error) {
    next(error);
  }
});

app.get('/api/orders', async (req, res, next) => {
  try {
    const token = req.get('authorization')?.replace('Bearer ', '');

    if (!token || !authService.verifyToken(token)) {
      return res.status(401).json({ message: 'Token de autenticação inválido.' });
    }

    const orders = await orderService.listOrders();
    return res.json({ orders });
  } catch (error) {
    return next(error);
  }
});

app.post('/api/orders', async (req, res, next) => {
  try {
    const payload = orderSchema.parse(req.body);
    const createdOrder = await orderService.createOrder(payload);
    res.status(201).json({ order: createdOrder });
  } catch (error) {
    next(error);
  }
});

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (error instanceof z.ZodError) {
    return res.status(400).json({
      message: 'Dados inválidos.',
      errors: error.issues.map((issue) => issue.message),
    });
  }

  if (error instanceof Error) {
    return res.status(400).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Erro interno do servidor.' });
});

if (config.nodeEnv !== 'test') {
  app.listen(config.port, () => {
    console.log(`Chock Trufas API running at http://127.0.0.1:${config.port}`);
  });
}

export default app;
