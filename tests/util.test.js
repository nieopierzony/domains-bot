'use strict';

const Util = require('../src/util/Util');

describe('Util.isURL', () => {
  test('throw TypeError when url is not given', () => {
    const fn = () => Util.isURL();
    expect(fn).toThrow(TypeError);
    expect(fn).toThrow('URL should be given');
  });

  test('should reject not URLs', () => {
    expect(Util.isURL('qwerty')).toBeFalsy();
    expect(Util.isURL('asdf@343.dfs')).toBeFalsy();
    expect(Util.isURL('https://sdlaf@kljdf.#$sdf/sdaf')).toBeFalsy();
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

  test('should reject not domains', () => {
    expect(Util.isURL('qwerty')).toBeFalsy();
    expect(Util.isURL('asdf@343.dfs')).toBeFalsy();
    expect(Util.isURL('https://sdlaf@kljdf.#$sdf/sdaf')).toBeFalsy();
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
