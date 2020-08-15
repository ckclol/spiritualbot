const Discord = require("discord.js");
const client = new Discord.Client();





client.on("ready", () => {
    console.log(`Bot has started.`);
});







client.on('message', message => {
    if (message.content === '/help') {
        const hp = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Help')
            .setDescription('This is a place to tell you the commands.')
            .addField('Member list, ratings. (SMP)', 'Please do /members-help', true)
            .addField('Facts.', 'Please do /fact', true)
            .addField('Date.', 'Please do /date-help', true)
            .addField('ADMIN LIST(DEV)', true)
            .addField('Pend-Bot', 'Still in development.', true)
            .addField('Giveaways.', 'Still in development.', true)
            .addField('Challenges.', 'Still in development.', true)
            .addField('Debug/Perks (DEV', true) \
            .addField('Perks.', 'In development.', true)
            .addField('Debug.', 'Find :)', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(hp)
    };
    if (message.content === '/members-help') {
        const mh = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Member Help')
            .setDescription('Which members you wanna inspect? (SMP)')
            .addField('Command', '/members {nickname}(tech as "TECH", Moses as "{Moose")', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
            message.channel.send(mh)
    };
    if (message.content === '/members tcf/playz') {
        const ckc = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Chaukachun edu.')
            .setDescription('The owner of this server, trash at lots of stuff.')
            .addField('**SKILLS**', true)
            .addField('Building', '60/100', true)
            .addField('Command', '100/100', true)
            .addField('Redstone', '79/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(ckc)
    };
    if (message.content === '/members Moose') {
        const moose = new Discord.MessageEmbed()
            .setAuthor('TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png', 'https://kcserver.ga')
            .setColor('#dbce0d')
            .setTitle('Chaukachun123.')
            .setDescription('The no account in this server, good at lots of stuff.')
            .addField('**SKILLS**', true)
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
            .addField('**SKILLS**', true)
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
            .addField('**SKILLS**', true)
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
            .addField('**SKILLS**', true)
            .addField('Building', '86/100', true)
            .addField('Command', '92/100', true)
            .addField('Redstone', '85/100', true)
            .setFooter('By TCFPlayz', 'https://cdn.discordapp.com/app-icons/740846161539366912/0bdd26256dedaee5994ade2e91bf9448.png')
        message.channel.send(ckc)
    };
    if (message.content === '/fact') {
        var facts = ["Wolfy dude's name was from a call when ckc called him wolfy dude!","Wolfy dude is also named 'wolfieduediewateriebrownie jakieboie'!","There are 2 old members or just doesn't play bedrock anymore, cuz those two old members found bedrock impossible to break. They dont know about creative mode.","Tech is called tech cuz tech is tech.","Ckc, aka seekaesea.","Some says tech's item is still in the nether in S2","Kingcraft was made in 2020!", "Kingcraft have 5 members!", "We have weird nicknames!", "Moss stone was invented by moses because his nickname was moss!", "This community is cool!", "Moses is kinda noob", "Challenges was made by CUT AND WOLF!", "Giveaways are for the new pe.kcserver.ga", "Open kingcraft", "e", "More facts coming soon!", "Facts were from BCpig"];
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact])
    };
    if (message.content === '/date-help') {
        message.channel.send('Date! Please type the date you wanna know of, if nothing happens, then that date has nothing to do. Do /date year/month/day ')
    };
    if (message.content === '/date-help') {
        message.channel.send('Date! Please type the date you wanna know of, if nothing happens, then that date has nothing to do. Do /date year/month/day or /date year/month. The bot will only detect from July 19')
    };
    if (message.content === '/date 2020/7/19 ') {
        message.channel.send(' Kingcraft Season 1 ')
    };
    if (message.content === '/date 2020/8 ') {
        message.channel.send(' Kingcraft Season 2, Kingcraft Season 3, Kingcraft Season 3.1, Kingcraft Season 3.11 ')
    };
    if (message.content === '/pb-ckc') {
        message.channel.send('Type the bot name like this: /pb-ckc KingcraftBot')
    }
});
 client.login('NzQwODQ2MTYxNTM5MzY2OTEy.Xyu8wQ.8OfdJzQF7Hbul-zqZNTLMTBjUpU')