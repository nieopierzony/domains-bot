'use strict';

const Google = require('../src/util/Google');

describe('properly get data from google', () => {
  it('type of returned data is Boolean', async () => {
    await expect(typeof Google.isSafe('test.onion') === 'boolean').toBeTruthy();
  });

  it('"test.onion" should be safe', async () => {
    await expect(Google.isSafe('test.onion')).toBe(true);
  });
});
