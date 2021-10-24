'use strict';

const fetch = require('node-fetch');

const { SAFEBROWSING_ENDPOINT } = require('./Constants');
const Util = require('./Util');

module.exports = class Google extends null {
  /**
   * Looks for a domain in Google's registry of restricted sites
   * @param {string} domain Domain or URL of needed site
   * @returns {Promise<boolean>} Whether the domain is in the google registryl
   */
  static async isSafe(domain) {
    // Validate domain
    // If it's like URL (https://smth.com/test), get needed domain with Util
    if (Util.isURL(domain)) return this.isSafe(Util.domainFromURL(domain));
    if (!Util.isDomain(domain)) throw new TypeError('Provided domain is invalid');

    // Request google API and process response
    const req = await fetch(`${SAFEBROWSING_ENDPOINT}${domain}`);
    const res = await req.text();
    const parsed = JSON.parse(res.substring(6));

    const isSafe = parsed[0][1] === 1 || parsed[0][1] === 6;
    return isSafe;
  }
};
