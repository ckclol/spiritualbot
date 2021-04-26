const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./token.json');
const prefix = '/';
var photo = 'https://cdn.discordapp.com/avatars/340022376924446720/e0cf487f4d8b4567f5f1898a5e7ab680.png?size=128';
const util = require('minecraft-server-util');
var res = null;
util.statusBedrock('mc.spmc.ml')
    .then((response) => {
        console.log(response);
        res = response;
    })
    .catch((error) => {
        console.error(error);
    });
client.on("ready", () => {
    client.user.setActivity(`Server status:` + res);
    client.user.setPresence({
    status: 'online',
    activity: {
        name: 'Server status:' + res,
        type: 'PLAYING',
        url: 'https://www.github.com/ckclol'
              }
    })
    console.log(`done, opened`);
});
client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});
client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});
client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});      
client.login(config.token)
