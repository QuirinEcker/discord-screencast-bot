const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token').token;
const whitelist = Array.from(require("./whitelist.json"))

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    whitelist.forEach(item => console.log(item));
});

client.on('message', (msg) => {
        if (msg.content === '§screencast') {
            msg.channel.send(`**With this link you will get access to the screencast:**`)

            if (msg.member.voiceChannelID != null) {
                msg.channel.send(`http://discordapp.com/channels/${msg.guild.id}/${msg.member.voiceChannelID}`);
            } else {
                msg.channel.send("```diff\n-Please join a channel\n```");
            }

            console.log(whitelist.indexOf(msg.guild.id))
            console.log(msg.guild.id);
            if (!(whitelist.indexOf(msg.guild.id) > -1)) msg.channel.send(`For Bugs visit the **Implodium**  discord server https://discord.gg/N8Qk6gA`)
            else msg.channel.send(`**For Bugs send messages into** ${msg.guild.channels.get("651726057929441281")} **or contact** ${msg.guild.members.get("204674824910405633")}`);
        }
});

console.log(client.login(token));


