'use strict';

const startController = require('./start/index');
const summaryController = require('./summary/index');

module.exports = bot => {
  startController(bot);
  summaryController(bot);
};
