describe('Flaky Tests Simulation', () => {
  test('randomly failing test', () => {
    const randomValue = Math.random();
    // Fails approximately 30% of the time
    expect(randomValue).toBeGreaterThan(0.3);
  });

  test('timing-sensitive test', async () => {
    const start = Date.now();
    await new Promise(resolve => setTimeout(resolve, 100));
    const duration = Date.now() - start;
    // May fail due to system load
    expect(duration).toBeLessThan(120);
  });

  test('occasionally passing test', () => {
    const timestamp = Date.now();
    // Fails on odd milliseconds (50% failure rate)
    expect(timestamp % 2).toBe(0);
  });

  test('resource contention test', () => {
    // Simulates resource availability issues
    const available = Math.random() > 0.3;
    expect(available).toBe(true);
  });

  test('async race condition test', async () => {
    let result: string | undefined;

    // Two async operations racing
    Promise.resolve().then(() => { result = 'first'; });
    Promise.resolve().then(() => { result = 'second'; });

    await new Promise(resolve => setTimeout(resolve, 10));

    // Might be 'first' or 'second' depending on timing
    expect(result).toBe('second');
  });
});
