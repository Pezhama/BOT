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

bot.onText(/[^а-я]плох/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `что случилось?`);

})

bot.onText(/\/mark/, (msg, match) => {
	
bot.sendMessage(msg.chat.id,`thank you`);
bot.sendMessage(`@retrochanel`,`Nastya got `+ msg.text.match(/\/mark(.*)/)[1])
})

bot.onText(/[за]?бол[еиь]/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `почему?`);
})

bot.onText(/(бес[яи])|(раздраж)/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `на самом деле ты бесишься на себя`);
})

bot.onText(/по|рас[c+]ор[иа]/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `За любой ссорой следует примирение`);
})

bot.onText(/[^а-я](е|о)гэ|[^а-я](кр)[^а-я]/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Любой экзамен — это всего лишь одна маленькая часть твоей жизни. Не стоит расстраиваться из-за такой ерунды`);
})

bot.onText(/((по|за|до)говор(ить|ишь|им|ю))|(слушай)]/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Я всегда готов тебя выслушать`);
})	

bot.onText(/[^а-я]дз/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Тебе нужно собраться и поставить себе цель, тогда всё получится`);
})	

bot.onText(/[^а-я]бот/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Я бот, но писал меня человек, а значит во мне есть доля человечности`);
})	

bot.onText(/[^а-я]ску[чно|ка]/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Я могу развеселить тебя`);
})	

bot.onText(/м[е|э]м/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `(картинка)`);
})	

bot.onText(/один[ок|око|оки|чество|оким]?/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Посмотри по сторонам, вокруг наверняка есть хотя один человек, который готов обнять тебя`);
})	

bot.onText(/[^а-я]чувства/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Ты не можешь знать, что у других людей в голове. Everyone you meet is fighting a battle you know nothing about. Be kind. Always`);
})	

bot.onText(/[под]?т[о|а]шн[ит|ота|о|ивает]/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Тошнота это физическое проявление твоего душевного состояния`);
})	

bot.onText(/[по|до]?е[да|сть]/, (msg, match) => {
	bot.sendMessage(msg.chat.id , `Следи за своими физическими потребностями и тогда твоё душевное состояние может улучшиться`);
})	