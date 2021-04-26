const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require('./token.json');
const prefix = '/';
var photo = 'https://cdn.discordapp.com/avatars/340022376924446720/e0cf487f4d8b4567f5f1898a5e7ab680.png?size=128';
const util = require('minecraft-server-util');
var res = null;
const r1 = "833883908193910814";
const r2 = "833882995152781322";
const rol1 = "<@&833881657140183042>"; //bdr
const rol2 = "<@&833882034564628480>"; //jav 
const msgid = "835822944995115029";
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
channelID.messages.fetch(msgid).then(function (message) { 
    message.react(r1);
    message.react(r2);
})
const time = 600000;

msgid.then(async function (message) {
     await message.react(rol1)
     const filter = (reaction, user) => {
          return reaction.emoji.id === r1 && user.id === call.message.author.id;
        }
    const collector = message.createReactionCollector(filter, { time: time });

     collector.on('collect', (reaction, user) => {
        console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        ruser.roles.add(rol1).catch(console.error);
     });
     collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });
});
msgid.then(async function (message) {
    await message.react(rol2)
    const filter = (reaction, user) => {
         return reaction.emoji.id === r2 && user.id === call.message.author.id;
       }
   const collector = message.createReactionCollector(filter, { time: time });

    collector.on('collect', (reaction, user) => {
       console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
       ruser.roles.add(rol2).catch(console.error);
    });
    collector.on('end', collected => {
       console.log(`Collected ${collected.size} items`);
   });
});

client.login(config.token)
