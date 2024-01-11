import { randAddress } from '@ngneat/falso';

import httpJsonBodyParserMiddleware from './index.js';

describe('middy-json-body-parser', () => {
  let middleware;
  const address = randAddress();
  const cases = [
    ['json payload, no parse needed, should warn', address, address, false],
    [
      'json stringified payload, parse needed',
      JSON.stringify(address),
      address,
      false,
    ],
    [
      'base64 json stringified payload, parse needed',
      Buffer.from(JSON.stringify(address), 'ascii').toString('base64'),
      address,
      true,
    ],
  ];

  beforeEach(() => {
    middleware = httpJsonBodyParserMiddleware();
  });

  test.each(cases)('%s', async (caseName, body, expected, base64) => {
    const request = { event: { body, isBase64Encoded: base64 } };

    await middleware.before(request);

    expect(request).toEqual({
      event: { body: expected, isBase64Encoded: base64 },
    });
  });
});
