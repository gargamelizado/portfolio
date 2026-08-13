import request from 'supertest';
import { describe, expect, it } from 'vitest';

import app from '../app';

describe('Chock Trufas API', () => {
  it('health check should return service status', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ ok: true, service: 'chock-trufas-api' });
  });

  it('catalog endpoint should expose products and categories', async () => {
    const response = await request(app).get('/api/catalog');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.products)).toBe(true);
    expect(response.body.products.length).toBeGreaterThan(0);
    expect(Array.isArray(response.body.categories)).toBe(true);
    expect(response.body.categories.length).toBeGreaterThan(0);
  });
});
