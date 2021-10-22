'use strict';

const Util = require('../src/util/Util');

describe('Util.isURL', () => {
  test('type of return must be always Boolean', () => {
    expect(typeof Util.isURL() === 'boolean').toBe(true);
  });

  test('simple domain (example.com) must be false', () => {
    expect(Util.isURL('example.com')).toBe(false);
  });

  test('parse simple url (https://example.com)', () => {
    expect(Util.isURL('https://example.com')).toBe(true);
  });

  test('http URLs (http://example.com)', () => {
    expect(Util.isURL('http://example.com')).toBe(true);
  });

  test('complicated URLs (https://example.com/foo/bar?foo=bar&bar=foo)', () => {
    expect(Util.isURL('https://example.com/foo/bar?foo=bar&bar=foo')).toBe(true);
  });
});

describe('Util.isDomain', () => {
  test('type of return must be always Boolean', () => {
    expect(typeof Util.isDomain() === 'boolean').toBe(true);
  });

  test('parse simple domain (example.com)', () => {
    expect(Util.isDomain('example.com')).toBe(true);
  });
});

describe('Util.domainFromURL', () => {
  test('should throw Error when given URL in invalid', () => {
    const fn = () => Util.domainFromURL('not.url');
    expect(fn).toThrow(TypeError);
    expect(fn).toThrow('Given URL is invalid');
  });

  test('parse simple URL (https://example.com)', () => {
    const domain = Util.domainFromURL('https://example.com');
    expect(typeof domain === 'string').toBeTruthy();
    expect(domain).toBe('example.com');
  });

  test('parse complicated URL (https://example.com/foo/bar?foo=bar&bar=foo)', () => {
    const domain = Util.domainFromURL('https://example.com/foo/bar?foo=bar&bar=foo');
    expect(typeof domain === 'string').toBeTruthy();
    expect(domain).toBe('example.com');
  });
});
