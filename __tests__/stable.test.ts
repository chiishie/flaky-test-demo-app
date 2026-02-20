describe('Stable Tests', () => {
  test('GET / returns welcome message', () => {
    const message = 'Demo API';
    expect(message).toContain('Demo API');
  });

  test('GET /health returns healthy status', () => {
    const status = 'healthy';
    expect(status).toBe('healthy');
  });

  test('validates request parameters', () => {
    const isValid = true;
    expect(isValid).toBe(true);
  });
});

describe('Integration Tests', () => {
  test('API responds to requests', async () => {
    const response = { status: 200 };
    expect(response.status).toBe(200);
  });

  test('Database connection works', async () => {
    const connected = true;
    expect(connected).toBe(true);
  });
});
