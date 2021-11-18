const Discord = require('discord.js');
const path = require('path');
const WOKCommands = require('wokcommands');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.login("ODkzNzI2MzI1NjcwNTQzNDAx.YVfpgA.HVxlK0Pn3NsR9Ckb5-GDz0U35MI");

let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

client.on('ready', () => {
    console.log(`started at ${hours}h${minutes}m${seconds}s`)
    client.user?.setPresence({ activities: [{ name: 'game for people' }], status: 'idle'});
    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        botOwners: '744091948985614447',
        mongoUri: "mongodb+srv://long:NIjHZhlAFgbf9GHI@longutilities.0sne6.mongodb.net/LongUtilities",
        showWarns: true,
        disabledDefaultCommands: [
            'channelonly',
            'command',
            'prefix',
            'requiredrole',
            'slash',
            'language',
        ]
    })
})

// client.on('messageCreate', (message) => {
//     if (message.author.bot) return;
//     if (message.content == 'test') {
//         message.reply('bot is working')
//     }
// })