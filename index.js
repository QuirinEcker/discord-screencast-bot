const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token').token;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if (msg.content === '§screencast') {
        if (msg.channel.id == 410537317497831424) {
            if (msg.member.voiceChannelID != null) {
                msg.channel.send(`http://discordapp.com/channels/388433193638035457/${msg.member.voiceChannelID}`);
            } else {
                msg.channel.send("```diff\n-Please join a channel\n```");
            }
        } else {
            msg.channel.send("```diff\n-Please send bot commands into the bot chanel\n```");
            let commandMessage = msg.channel.lastMessageID;
            setTimeout(() => {
                console.log(msg.channel.messages.get(msg.channel.lastMessageID).delete());
                console.log(msg.channel.messages.get(commandMessage).delete());
            }, 5000);
        }
    }
});

console.log(client.login(token));


