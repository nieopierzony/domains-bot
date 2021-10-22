require('dotenv').config();

const path = require('path');
const { Telegraf } = require('telegraf');
const TelegrafI18n = require('telegraf-i18n');

const handlersController = require('./handlers');

const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

const i18n = new TelegrafI18n({
  defaultLanguage: 'ru',
  directory: path.resolve(__dirname, 'locales'),
});
bot.use(i18n.middleware());

// Load up the handler
handlersController(bot);

bot.launch();
