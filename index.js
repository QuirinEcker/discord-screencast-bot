const Discord = require('discord.js');
const client = new Discord.Client();
const aws = require('aws-sdk');

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

let Bot_Token = new aws.BOT_TOKEN({
    accessKeyId: process.env.BOT_TOKEN_KEY,
    secretAccessKey: process.env.BOT_TOKEN_SECRET
})

// let myInterface = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let token;

// myInterface.setPrompt("Token: ");
// myInterface.prompt();
// myInterface.on('line', (input) => {
//     token = input;   
//     myInterface.close();
// });

console.log(client.login(Bot_Token));


