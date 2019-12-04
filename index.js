const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token').token;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
        if (msg.content === '§screencast') {
            if (msg.member.voiceChannelID != null) {
                if (msg.guild.id !== "388433193638035457") msg.channel.send(`For Bugs visit the **Implodium**  discord server https://discord.gg/N8Qk6gA`);
                msg.channel.send(`http://discordapp.com/channels/${msg.guild.id}/${msg.member.voiceChannelID}`);
            } else {
                if (msg.guild.id !== "388433193638035457") msg.channel.send(`For Bugs visit the **Implodium** discord server https://discord.gg/N8Qk6gA`);
                msg.channel.send("```diff\n-Please join a channel\n```");
            }
        }
});

console.log(client.login(token));


