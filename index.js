const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.login("ODkzNzI2MzI1NjcwNTQzNDAx.YVfpgA.HVxlK0Pn3NsR9Ckb5-GDz0U35MI");

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content == 'test') {
        message.reply('bot is working')
    }
})