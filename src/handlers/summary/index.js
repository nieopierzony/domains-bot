'use strict';

const summaryHandler = require('./summary');

module.exports = bot => {
  bot.on('text', summaryHandler);
};
