const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./token.json');
const prefix = '/';
var photo = 'https://cdn.discordapp.com/avatars/340022376924446720/e0cf487f4d8b4567f5f1898a5e7ab680.png?size=128';
const util = require('minecraft-server-util');
var res = null;
util.statusBedrock('mc.spmc.ml') // port is default 19132
    .then((response) => {
        console.log(response);
        res = response;
    })
    .catch((error) => {
        console.error(error);
    });
client.on("ready", () => {
    client.user.setActivity("Server status:" + res);
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
while true do {
   util.statusBedrock('mc.spmc.ml') // port is default 19132
    .then((response) => {
        console.log(response);
        res = response;
    })
    .catch((error) => {
        console.error(error);
    });
    client.user.setActivity("Server status:" + res);
}
// role manager
const r1 = "<:c_:833883908193910814>";
const r2 = "<:java:833882995152781322>;
const rol1 = "<@&833881657140183042>"; //bdr
const rol2 = "<@&833882034564628480>"; //jav
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
const channel = "833881081861898250)";
// axtual part of rank manager
const messageid = null;
const reactionMessage = await messageid.channel.send(dcembed);
    await reactionMessage.react(rol1);
    await reactionMessage.react(rol2);
    reactionMessage.awaitReactions(Filter, {max: 1, time: 30000, errors: ["time"]}).then(collected => {
        const reaction = collected.first();
        switch (reaction.emoji.name) {
            case rol1:
                if (message.member.roles.cache.has(rol1.id)) {return message.member.role.cache.send("You already have the role.")};
                message.member.roles.add(rolq).then(message.role.cache.send("Role added!"));
                break
            case rol2:
                if (message.member.roles.cache.has(rol2.id)) {return message.member.role.cache.send("You already have the role.")};
                message.member.roles.add(rol2).then(message.role.cache.send("Role added!"));
                break
        }
});
client.login(config.token)
