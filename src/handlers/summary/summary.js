'use strict';

const ping = require('ping');

const Google = require('../../util/Google');
const Telegram = require('../../util/Telegram');
const Util = require('../../util/Util');

module.exports = async ctx => {
  try {
    const messageText = ctx.message.text;

    // Check, if domain is valid
    let domain = '';
    if (Util.isURL(messageText)) domain = Util.domainFromURL(messageText);
    else if (Util.isDomain(messageText)) domain = messageText;

    if (!domain) {
      Telegram.send(ctx, ctx.i18n.t('errors.invalidDomain'));
      return false;
    }

    // Get data about given site
    const isSafe = await Google.isSafe(domain);
    const pingData = await ping.promise.probe(domain);

    Telegram.send(ctx, ctx.i18n.t('summary.content', { pingData, isSafe, domain }));
  } catch (err) {
    console.error(err);
  }

  return true;
};
