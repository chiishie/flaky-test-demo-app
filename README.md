# Flaky Test Demo App

This repository contains intentionally flaky tests for demonstrating Datadog's Flaky Test Management and Bits AI capabilities.

## Flaky Tests

The following tests are intentionally unreliable:

1. **randomly failing test** - Uses non-deterministic `Math.random()`
2. **timing-sensitive test** - Depends on execution timing
3. **occasionally passing test** - Based on system timestamp
4. **resource contention test** - Simulates resource availability
5. **async race condition test** - Async operations without proper ordering

## Purpose

This repository is used for testing Datadog CI Visibility features:
- Flaky test detection
- Test Impact Analysis
- Bits AI automated test fixing

## Setup

```bash
npm install
npm test
```

## Datadog Integration

Test results are uploaded to Datadog CI Visibility via JUnit XML reports.
# Updated Fri Feb 20 12:43:57 EST 2026
