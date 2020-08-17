const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./token.json');
const prefix = '/'; 
const pbhelp = new Discord.MessageEmbed()
    .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
    .setColor('#dbce0d')
    .setTitle('Help')
    .addField('do /pb {bot-name}, {reason}', 'space is replaced with -', true)
    .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png');



client.on("ready", () => {
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
          var ping = m.createdTimestamp - message.createdTimestamp;
          var botPing = Math.round(client.pi);
          const ping2 = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle(':ping_pong: Pong!', '', true)
            .addField('Ping:', '${ping}ms!', true)
            .setFooter('By TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
            
          
          m.edit(`**:ping_pong: Pong! Your Ping Is:-**\n  ${ping}ms`);
    };
    if (command === 'help') {
        const hp = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Help')
            .setDescription('This is a place to tell you the commands.')
            .addField('Member list, ratings. (SMP)', 'Please do /members-help', true)
            .addField('Facts.', 'Please do /fact', true)
            .addField('Ping?', 'Ping! Please do /ping!', true)
            .addField('Invite.', 'Support ckc by inviting the bot!(do /invite)')
            .addField('Guilds.', 'check how many servers has kingcraftbot joined?', true)
            .addField('ADMIN LIST(DEV)', '')
            .addField('Giveaways.', 'Still in development.', true)
            .addField('Challenges.', 'Still in development.', true)
            .addField('Perks (DEV)', '')
            .addField('Perks.', 'In development.', true)
            .addField('More', 'More in 2.0', true)
            .setFooter('By TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(hp)
       client.user.setActivity(`Minecraft`)
        console.log('Help')
    };
    if (command === 'members-help') {
        const mh = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Member Help')
            .setDescription('Which members you wanna inspect? (SMP)', '')
            .addField('Command', '/members {nickname}(tech as "TECH", Moses as "Moss")', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(mh)
        console.log('meh')
    };
    if (command === 'members tcf/playz') {
        const ckc = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Chaukachun edu.')
            .setDescription('The owner of this server, trash at lots of stuff.')
            .addField('**SKILLS**', '')
            .addField('Building', '70/100', true)
            .addField('Command', '100/100', true)
            .addField('Redstone', '79/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(ckc)
    };
    if (command === 'members Moss') {
        const moose = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Chaukachun123.')
            .setDescription('The no account in this server, good at lots of stuff.')
            .addField('**SKILLS**', '')
            .addField('Building', '78/100', true)
            .addField('Command', '60/100', true)
            .addField('Redstone', '90/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(moose)
        message.channel.send('Chaukachun123, The no account in this server, good at lots of stuff. **SKILLS** Building 78/100, Commanding 60/100, Redstone 90/100, Stuff Maker 50/100')
    };
    if (command === 'members TECH') {
        const tech = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('TechnicRain8.')
            .setDescription('The best in this server, good at everything.')
            .addField('**SKILLS**', '')
            .addField('Building', '100/100', true)
            .addField('Command', '60/100', true)
            .addField('Redstone', '98/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(tech)
    };
    if (command === 'members wolfy dude') {
        const lyon = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Billyon133.')
            .setDescription('The noob in this server, cool but bad.')
            .addField('**SKILLS**', '')
            .addField('Building', '100/100', true)
            .addField('Command', '10/100', true)
            .addField('Redstone', '60/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(lyon)
    };
    if (command === 'members Pgz_epicgamerplayz') {
        const epic = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('CutSkydiver16.')
            .setDescription('The pvp master in this server, good at server games.')
            .addField('**SKILLS**', '')
            .addField('Building', '86/100', true)
            .addField('Command', '92/100', true)
            .addField('Redstone', '85/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(ckc)
    };
    if (command === 'fact') {
        var facts = ["Wolfy dude's name was from a call when ckc called him wolfy dude!", "Wolfy dude is also named 'wolfieduediewateriebrownie jakieboie'!", "There are 2 old members or just doesn't play bedrock anymore, cuz those two old members found bedrock impossible to break. They dont know about creative mode.", "Tech is called tech cuz tech is tech.", "Ckc, aka seekaesea.", "Some says tech's item is still in the nether in S2", "Kingcraft was made in 2020!", "Kingcraft have 5 members!", "We have weird nicknames!", "Moss stone was invented by moses because his nickname was moss!", "This community is cool!", "Moses is kinda noob", "Challenges was made by CUT AND WOLF!", "Giveaways are for the new pe.kcserver.ga", "Open kingcraft", "e", "More facts coming soon!", "Facts were from BCpig"];
        var fact = Math.floor(Math.random() * facts.length);
        const factss = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Facts')
            .addField(facts[fact], '')
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(factss)
    };
    if (command === 'invite') {
        const invite = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Invite link.')
            .addField('https://discord.com/api/oauth2/authorize?client_id=740846161539366912&permissions=8&scope=bot', '')
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(invite)
    };
    if (command === 'giveaways') {
        if (member.roles.cache.some(role => role.name === 'Founder')) {
            if (!args.length) return message.channel.send('Do /giveaway {title} {give what} {time}')
            const gws = new Discord.messageEmbed()
                .setAuthor('TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
                .setColor('#dbce0d')
                .setTitle(args[2])
                .addField(args[3], args[4], true)
                .setFooter('By TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
            message.channel.send(gws)

        };
    };
    if (command === 'challenges') {
        if (member.roles.cache.some(role => role.name === 'Founder')) {
            if (!args.length) return message.channel.send('/challenges {title} {what challenge}')
            const gws = new Discord.messageEmbed()
                .setAuthor('TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
                .setColor('#dbce0d')
                .setTitle(args[2])
                .addField(args[3], '24 hours', true)
                .setFooter('By TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
            message.channel.send(gws)

        };
    }
});
client.login(config.token)   

