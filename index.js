const TelegramBot = require('node-telegram-bot-api')

const TOKEN = process.env.TLGTOKEN

const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/bells/, (msg, match) => {
	bot.sendMessage(`@retrochanel` , `9:15-9:55
10:05-10:45
11:00-11:40
11:55-12:35
12:50-13:30
13:40-14:20
14:35-15:15
15:20-16:00`)
})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `chuits, ${msg.from.first_name}`)
})

bot.onText(/[^а-я]плох/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `что случилось?`);

})

bot.onText(/\/mark/, (msg, match) => {
	
bot.sendMessage(msg.chat.id,`thank you`);
bot.sendMessage(`@retrochanel`,`Nastya got `+ msg.text.match(/\/mark(.*)/)[1])
})
