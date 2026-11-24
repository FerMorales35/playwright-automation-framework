import { test, expect } from '@playwright/test';

/**
 * Tests de API sobre JSONPlaceholder (API REST pública de prueba).
 * Usan el fixture `request` de Playwright, sin navegador.
 */
test.describe('API · /posts', () => {
  test('API-01 · GET /posts devuelve 100 posts @smoke', async ({ request }) => {
    const response = await request.get('/posts');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const posts = await response.json();
    expect(posts).toHaveLength(100);
  });

  test('API-02 · GET /posts/1 respeta el contrato', async ({ request }) => {
    const response = await request.get('/posts/1');
    expect(response.ok()).toBeTruthy();

    const post = await response.json();
    expect(post).toEqual({
      userId: expect.any(Number),
      id: 1,
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  test('API-03 · GET con filtro por query param', async ({ request }) => {
    const response = await request.get('/posts', { params: { userId: 1 } });
    const posts: Array<{ userId: number }> = await response.json();

    expect(posts.length).toBeGreaterThan(0);
    for (const post of posts) {
      expect(post.userId).toBe(1);
    }
  });

  test('API-04 · POST /posts crea un recurso', async ({ request }) => {
    const payload = { title: 'QA Automation', body: 'Creado desde Playwright', userId: 1 };
    const response = await request.post('/posts', { data: payload });

    expect(response.status()).toBe(201);
    const created = await response.json();
    expect(created).toMatchObject(payload);
    expect(created.id).toBeDefined();
  });

  test('API-05 · GET de un recurso inexistente devuelve 404', async ({ request }) => {
    const response = await request.get('/posts/99999');
    expect(response.status()).toBe(404);
  });
});
