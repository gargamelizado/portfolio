import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const docesCategory = await prisma.category.upsert({
    where: { slug: 'doces' },
    update: {},
    create: { name: 'Doces', slug: 'doces' },
  });

  const salgadosCategory = await prisma.category.upsert({
    where: { slug: 'salgados' },
    update: {},
    create: { name: 'Salgados', slug: 'salgados' },
  });

  const products = [
    { name: 'Cone trufado', price: 10, description: 'Cone trufado artesanal', categoryId: docesCategory.id },
    { name: 'Barra de Chocolate', price: 5, description: 'Barra crocante com chocolate', categoryId: docesCategory.id },
    { name: 'Alfajor Maria', price: 8, description: 'Alfajor com recheio premium', categoryId: docesCategory.id },
    { name: 'Empadão', price: 10, description: 'Empadão de qualidade', categoryId: salgadosCategory.id },
    { name: 'Italianilho', price: 10, description: 'Italianilho recheado', categoryId: salgadosCategory.id },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: `seed-${product.name.toLowerCase().replace(/\s+/g, '-')}` },
      update: {},
      create: {
        id: `seed-${product.name.toLowerCase().replace(/\s+/g, '-')}`,
        ...product,
      },
    });
  }

  const passwordHash = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@chocktrufas.com.br' },
    update: {},
    create: {
      email: 'admin@chocktrufas.com.br',
      name: 'Administrador',
      password: passwordHash,
      role: 'admin',
    },
  });

  console.log('Seed executado com sucesso.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
