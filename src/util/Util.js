'use strict';

const DOMAIN_REGEXP = `^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$`;
const URL_REGEXP = `^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)`;

module.exports = class Util extends null {
  /**
   * Whether the specified string is a valid URL (https://smth.com/foo/bar?test)
   * @param {string} url
   * @returns {boolean} Whether url is valid
   */
  static isURL(url) {
    const regex = new RegExp(URL_REGEXP);
    return regex.test(url);
  }

  /**
   * Whether the specified string is a valid domain (smth.com)
   * @param {string} url
   * @returns {boolean} Whether url is valid
   */
  static isDomain(domain) {
    const regex = new RegExp(`^${DOMAIN_REGEXP}$`);
    return regex.test(domain);
  }

  /**
   * Parse domain (example.com) from URL (https://example.com/foo/bar?test)
   * @param {string} url
   * @returns {string} domain Parsed domain from url (example.com)
   */
  static domainFromURL(url) {
    if (!this.isURL(url)) throw new TypeError('Given URL is invalid');
    const regex = new RegExp(URL_REGEXP);
    const matchedGroups = [...url.match(regex)];
    if (!matchedGroups[1]) throw new Error('Domain was not found');
    return matchedGroups[1];
  }
};
