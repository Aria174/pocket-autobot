require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Получаем токен и чат ID из переменных окружения
const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    console.log('Получено сообщение:', msg.text);

    // Автоответ
    bot.sendMessage(chatId, `Сигнал принят: ${msg.text}`);
});
