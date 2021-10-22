'use strict';

const Keyboards = require('../../util/Keyboards');
const { send } = require('../../util/Telegram');

module.exports = ctx => {
  try {
    send(ctx, ctx.i18n.t('start.greeting'), Keyboards.start(ctx));
  } catch (err) {
    console.error(err);
  }
};
