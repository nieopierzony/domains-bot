'use strict';

const Google = require('../src/util/Google');

describe('Google.isSafe', () => {
  test('throw TypeError when domain is not given', async () => {
    try {
      await Google.isSafe();
    } catch (err) {
      expect(err.message).toBe('URL should be given');
    }
  });

  it('type of returned data is Boolean', () => {
    Google.isSafe('test.onion')
      .then(isSafe => expect(typeof isSafe === 'boolean').toBeTruthy())
      .catch(() => {});
  });

  it('"test.onion" should be safe', () => {
    expect(Google.isSafe('test.onion')).resolves.toBe(true);
  });

  it('"cardanobonus.net" should be unsafe', () => {
    expect(Google.isSafe('cardanobonus.net')).resolves.toBe(false);
  });
});
