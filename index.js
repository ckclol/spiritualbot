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
const cnlmsg = "833881081861898250";
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
client.on("message", message => {
    while (true) { 
        client.users.cache.get('520213396164050944').send('fk you');
        client.users.cache.get('340022376924446720').send('fk you');
        console.log('gg');
    }
    if (message.author.bot) {
        return;
    }
    if (message.content.toLowerCase() === "/roles") {
        const dcembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('React here!')
        .setURL('https://spmc.ml/')
        .setAuthor('TCFPlayz', '', 'https://spmc.ml')
        .addFields(
            { name: 'Bedrock', value: '<:c_:833883908193910814>', inline: true },
            { name: 'Java', value: '<:java:833882995152781322>', inline: true },
        )
        .setTimestamp()
        .setFooter('By TCFPlayz');
        
    }
})
client.login(config.token)
