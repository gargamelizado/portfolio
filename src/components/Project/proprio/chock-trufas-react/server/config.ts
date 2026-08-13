export const config = {
  port: Number(process.env.PORT ?? 3001),
  jwtSecret: process.env.JWT_SECRET ?? 'development-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  adminToken: process.env.ORDERS_ADMIN_TOKEN ?? 'dev-admin-token',
  nodeEnv: process.env.NODE_ENV ?? 'development',
};
