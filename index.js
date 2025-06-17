import express from 'express';
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);
app.use(bot.webhookCallback('/'));

bot.start((ctx) => ctx.reply('Привет! Я бот по созданию AI-контента. Что закажем? ✍️'));

app.get('/', (req, res) => {
  res.send('Bot is alive');
});

bot.launch({
  webhook: {
    domain: 'web-production-42fd6.up.railway.app',
    port: process.env.PORT || 3000
  }
});

console.log('🚀 Webhook listening...');
