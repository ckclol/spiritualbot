const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./token.json');
const prefix = '/';
var photo = 'https://cdn.discordapp.com/avatars/340022376924446720/e0cf487f4d8b4567f5f1898a5e7ab680.png?size=128';



client.on("ready", () => {
    client.user.setActivity(`Spiritual Client 1.8.9`);
    client.user.setPresence({
    status: 'online',
    activity: {
        name: 'Spiritual Client 1.8.9',
        type: 'PLAYING',
        url: 'https://www.axaplas.ga'
              }
    })
    console.log(`done, opened`);
});


client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});
client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});
client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});
client.on('message', message => {
    const member = message.member;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
        if (!message.content.startsWith(prefix)) return;
        if (command === "ping") {
          const m = message.channel.send("Ping?");
          var ping = Date.now() - m.createdTimestamp + " ms";
          const ping2 = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz, 1.92', photo, 'https://axaplas.ga')
            .setColor('#dbce0d')
            .setTitle(':ping_pong: Pong!', true)
              .addField('Ping:', `${Date.now() - message.createdTimestamp} ms!`, true)
            .setFooter('By TCFPlayz, 1.92', photo)
          message.channel.send(ping2)
    };
    if (command === 'help') {
        const hp = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz, 2.0', photo, 'https://axaplas.ga')
            .setColor('#dbce0d')
            .setTitle('Help')
            .setDescription('This is a place to tell you the commands.')
            .addField('Facts.', '/facts', true)
            .addField('Ping?', 'Ping! Please do /ping!', true)
            .addField('Invite.', 'Support ckc by inviting the bot!(do /invite)')
            .addField('Guilds.', 'Coming in 2.12.', true)
            .addField('ADMIN LIST(DEV)', 'cat')
            .addField('Giveaways.', 'Finishing in 2.1.', true)
            .addField('Challenges.', 'Basic function done.', true)
            .addField('Perks (DEV)', 'cat')
            .addField('Perks.', 'In development.', true)
            .addField('More', 'More in 2.03', true)
            .setFooter('By TCFPlayz, 2.0', photo)
        message.channel.send(hp)
    };
    if (command === 'fact') {
        var facts = ['give me facts in #factlist', 'Support our server by inviting the bot!'];
        var fact = Math.floor(Math.random() * facts.length);
        const factss = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', photo, 'https://axaplas.ga')
            .setColor('#dbce0d')
            .setTitle('Facts')
            .addField(facts[fact], 'TRUE FACT')
            .setFooter('By TCFPlayz', photo)
        message.channel.send(factss)
    };
    if (command === 'invite') {
        const invite = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', photo, 'https://axaplas.ga')
            .setColor('#dbce0d')
            .setTitle('Invite link.')
            .addField('https://discord.com/api/oauth2/authorize?client_id=765552511893110794&permissions=8&redirect_uri=https%3A%2F%2Fwww.axaplas.ga&scope=bot', 'none')
            .setFooter('By TCFPlayz', photo)
        message.channel.send(invite)
    };
    if (command === 'challenges') {
      const errorch = new Discord.MessageEmbed()
          .setAuthor('TCFPlayz', photo, 'https://axaplas.ga')
          .setColor('#dbce0d')
          .setTitle('Please do:')
          .addField('/challenges {title} {challenge} {time}', 'none')
          .setFooter('By TCFPlayz', photo)
            if (!args.length) return message.channel.send(errorch)
      const challenges = new Discord.MessageEmbed()
          .setAuthor('TCFPlayz', photo, 'https://axaplas.ga')
          .setColor('#dbce0d')
          .setTitle(args[0])
          .addField(args[1], args[2])
          .setFooter('By TCFPlayz', photo)
      message.channel.send(challenges)
    }
    if (command === 'crash') {
        const crash = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', photo, 'https://axaplas.ga')
            .setColor('#dbce0d')
            .setTitle('Invite link.')
            .addField('https://discord.com/api/oauth2/authorize?client_id=765552511893110794&permissions=8&redirect_uri=https%3A%2F%2Fwww.axaplas.ga&scope=bot', photo)
            .setFooter('By TCFPlayz', photo)
        message.channel.send(invite)
    };
    if (command === 'giveaway') {
      const errorgi = new Discord.MessageEmbed()
          .setAuthor('TCFPlayz', photo, 'https://axaplas.ga')
          .setColor('#dbce0d')
          .setTitle('Please do:')
          .addField('/giveaway {title} {giveaway} {amount of winners} {time}', 'none')
          .setFooter('By TCFPlayz', photo)
            if (!args.length) return message.channel.send(errorgi)
        const crash = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', photo, 'https://axaplas.ga')
            .setColor('#dbce0d')
            .setTitle(args[0])
            .addField(args[1], args[2])
            .addField('Time:', args[3])
            .setFooter('By TCFPlayz', photo)
        message.channel.send(invite)
    };
});
client.login(config.token)
