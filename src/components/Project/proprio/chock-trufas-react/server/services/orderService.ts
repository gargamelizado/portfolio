import { randomUUID } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export type OrderInput = {
  customerName: string;
  phone: string;
  items: Array<{
    productId: string;
    product: string;
    quantity?: string;
    quantityNumber?: number;
    unitPrice: number;
    subtotal: number;
    filling?: string;
    selectedComboItems?: Record<string, unknown> | null;
  }>;
  desiredDate?: string;
  deliveryMethod: 'Retirada' | 'Entrega';
  paymentMethod?: string;
  address?: string;
  pickupDate?: string;
  pickupTime?: string;
  pickupPerson?: string;
  pickupDocument?: string;
  notes?: string;
};

export const orderService = {
  async listOrders() {
    const filePath = resolve(__dirname, '..', 'data', 'orders.json');
    const raw = await readFile(filePath, 'utf-8');
    const parsed = JSON.parse(raw) as unknown[];
    return parsed;
  },

  async createOrder(input: OrderInput) {
    const filePath = resolve(__dirname, '..', 'data', 'orders.json');
    const raw = await readFile(filePath, 'utf-8').catch(() => '[]');
    const existing = JSON.parse(raw) as Array<Record<string, unknown>>;

    const total = input.items.reduce((sum, item) => sum + Number(item.subtotal || 0), 0);
    const createdOrder = {
      id: randomUUID(),
      status: 'novo',
      createdAt: new Date().toISOString(),
      customerName: input.customerName,
      phone: input.phone,
      items: input.items,
      products: input.items.map((item) => item.product),
      quantity: input.items.map((item) => `${item.product}: ${item.quantity ?? item.quantityNumber ?? 1}`).join(', '),
      total,
      desiredDate: input.desiredDate ?? '',
      deliveryMethod: input.deliveryMethod,
      paymentMethod: input.paymentMethod ?? '',
      address: input.address ?? '',
      pickupDate: input.pickupDate ?? '',
      pickupTime: input.pickupTime ?? '',
      pickupPerson: input.pickupPerson ?? '',
      pickupDocument: input.pickupDocument ?? '',
      notes: input.notes ?? '',
    };

    existing.unshift(createdOrder);
    await writeFile(filePath, `${JSON.stringify(existing, null, 2)}\n`, 'utf-8');

    return createdOrder;
  },
};
