const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./token.json')
const pbhelp = new Discord.MessageEmbed()
    .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
    .setColor('#dbce0d')
    .setTitle('Help')
    .addField('do /pb {bot-name}, {reason}', 'space is replaced with -', true)
    .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png');



client.on("ready", () => {
    console.log(`e`);
});







client.on('message', message => {
    if (message.content === '/help') {
        const hp = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Help')
            .setDescription('This is a place to tell you the commands.')
            .addField('Member list, ratings. (SMP)', 'Please do /members-help', true)
            .addField('Facts.', 'Please do /fact', true)
            .addField('Invite.', 'Support ckc by inviting the bot!(do /invite)')
            .addField('Guilds.', 'check how many servers has kingcraftbot joined?', true)
            .addField('ADMIN LIST(DEV)')
            .addField('Giveaways.', 'Still in development.', true)
            .addField('Challenges.', 'Still in development.', true)
            .addField('Perks (DEV)')
            .addField('Perks.', 'In development.', true)
            .addField('More', 'More in 2.0', true)
            .setFooter('By TCFPlayz, 1.9', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(hp)
        console.log('Help')
    };
    if (message.content === '/members-help') {
        const mh = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Member Help')
            .setDescription('Which members you wanna inspect? (SMP)')
            .addField('Command', '/members {nickname}(tech as "TECH", Moses as "Moss")', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(mh)
        console.log('meh')
    };
    if (message.content === '/members tcf/playz') {
        const ckc = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Chaukachun edu.')
            .setDescription('The owner of this server, trash at lots of stuff.')
            .addField('**SKILLS**')
            .addField('Building', '70/100', true)
            .addField('Command', '100/100', true)
            .addField('Redstone', '79/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(ckc)
    };
    if (message.content === '/members Moss') {
        const moose = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Chaukachun123.')
            .setDescription('The no account in this server, good at lots of stuff.')
            .addField('**SKILLS**')
            .addField('Building', '78/100', true)
            .addField('Command', '60/100', true)
            .addField('Redstone', '90/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(moose)
        message.channel.send('Chaukachun123, The no account in this server, good at lots of stuff. **SKILLS** Building 78/100, Commanding 60/100, Redstone 90/100, Stuff Maker 50/100')
    };
    if (message.content === '/members TECH') {
        const tech = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('TechnicRain8.')
            .setDescription('The best in this server, good at everything.')
            .addField('**SKILLS**')
            .addField('Building', '100/100', true)
            .addField('Command', '60/100', true)
            .addField('Redstone', '98/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(tech)
    };
    if (message.content === '/members wolfy dude') {
        const lyon = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Billyon133.')
            .setDescription('The noob in this server, cool but bad.')
            .addField('**SKILLS**')
            .addField('Building', '100/100', true)
            .addField('Command', '10/100', true)
            .addField('Redstone', '60/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(lyon)
    };
    if (message.content === '/members Pgz_epicgamerplayz') {
        const epic = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('CutSkydiver16.')
            .setDescription('The pvp master in this server, good at server games.')
            .addField('**SKILLS**')
            .addField('Building', '86/100', true)
            .addField('Command', '92/100', true)
            .addField('Redstone', '85/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(ckc)
    };
    if (message.content === '/fact') {
        var facts = ["Wolfy dude's name was from a call when ckc called him wolfy dude!", "Wolfy dude is also named 'wolfieduediewateriebrownie jakieboie'!", "There are 2 old members or just doesn't play bedrock anymore, cuz those two old members found bedrock impossible to break. They dont know about creative mode.", "Tech is called tech cuz tech is tech.", "Ckc, aka seekaesea.", "Some says tech's item is still in the nether in S2", "Kingcraft was made in 2020!", "Kingcraft have 5 members!", "We have weird nicknames!", "Moss stone was invented by moses because his nickname was moss!", "This community is cool!", "Moses is kinda noob", "Challenges was made by CUT AND WOLF!", "Giveaways are for the new pe.kcserver.ga", "Open kingcraft", "e", "More facts coming soon!", "Facts were from BCpig"];
        var fact = Math.floor(Math.random() * facts.length);
        const factss = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Facts')
            .addField(facts[fact])
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(factss)
    };
    if (message.content === '/pb-ckc') {
        message.channel.send('')
    };
    if (message.content === '/debug perks-all') { };
    if (message.content === '/invite') {
        const invite = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Invite link.')
            .addField('https://discord.com/api/oauth2/authorize?client_id=740846161539366912&permissions=8')
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(invite);
    };
    if (message.content.startsWith("/giveaways")) {
        if (member.HasPermission('ADMINSTATIOR')) {
            var usrtxt = message.content
            if (!usrtxt.length) {
                message.channel.send('Giveaways. Please do /giveaways {what} {desc} {time}(if there is any spaces use -)')
            }
            var txtspaced = usrtxt.split(" ")
            var remove1 = txtspaced.replace('/giveaways', '')
            var giveawaytext = remove1.replace('-', ' ')//wordediting
            var firstWords = []
            for (var i = 0; i < codelines.length; i++) {
                var codeLine = codelines[i]
                var firstWord = codeLine.substr(0, codeLine.indexOf(" "))
                firstWords.push(firstWord)
            }
            const giveawayembed = new Discord.MessageEmbed()
                .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
                .setColor('#dbce0d')
                .setTitle(firstWord[2])
                .setDescription(firstWord[3])
                .addField('Until:', firstWord[4], true)
                .addField('https://discord.com/api/oauth2/authorize?client_id=740846161539366912&permissions=8', true)
                .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
            message.channel.send(giveawayembed)
            message.delete(usrtxt)
        }
    }
    if (message.content.startsWith("/challenges")) {
        if (member.HasPermission('ADMINSTATIOR')) {
            var usrtxt1 = message.content;
            if (!usrtxt1.length) {
                message.channel.send('Challenges. Please use /challenges {what} {desc}(if there is any spaces use -)')
            }
            var txtspaced1 = usrtxt1.split(" ")
            var remove1 = txtspaced1.replace('/challenges', '')
            var giveawaytext1 = remove1.replace('-', ' ')
            var firstWordss = []
            for (var i = 0; i < codelines.length; i++) {
                var codeLine = codelines[i]
                var firstWordw = codeLine.substr(0, codeLine.indexOf(" "))
                firstWordss.push(firstWordw)
            };
            const chembed = new Discord.MessageEmbed()
                .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
                .setColor('#dbce0d')
                .setTitle(firstWordw[2])
                .setDescription(firstWordw[3])
                .addField('**24 HOURS**')
                .addField('https://discord.com/api/oauth2/authorize?client_id=740846161539366912&permissions=8', true)
                .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
            message.channel.send(chembed)
            message.delete(usrtxt1)
        }

    };


                client.login(config.token)
            }
    )

