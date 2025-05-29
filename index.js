require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios'); // <– добавили axios

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const text = msg.text;

  console.log('Получено сообщение:', text);

  try {
    await axios.post('https://hook.eu2.make.com/am6c63u8pr21vw95luphlty3pd2i7e6a', {
      message: text,
      chat_id: msg.chat.id,
      username: msg.from.username || '',
      timestamp: msg.date
    });

    bot.sendMessage(chatId, `Сигнал принят: ${text}`);
  } catch (error) {
    console.error('Ошибка при отправке в webhook:', error.message);
  }
});

