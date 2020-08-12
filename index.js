const Discord = require("discord.js");
const client = new Discord.Client();





client.on("ready", () => {
    console.log(`Bot has started.`);
});







client.on('message', message => {
    if (message.content === '/help') {
        message.channel.send('1. Member list (/members-help), 2. Facts (/facts), 3. Date of stuff (/date-help), 4. PendBot (/pb-ckc)')
    };
    if (message.content === '/members-help') {
        message.channel.send('Which Member would you like to inspect?( Look at @Members ), do /members **member u want** (All the Nicknames) ')
    };
    if (message.content === '/members tcf/playz') {
        message.channel.send('Chaukachun edu, The owner of this server, trash at lots of stuff. **SKILLS** Building 60/100, Commanding 87/100, Redstone 70/100, Stuff Maker 98/100')
    };
    if (message.content === '/members Moose') {
        message.channel.send('Chaukachun123, The no account in this server, good at lots of stuff. **SKILLS** Building 78/100, Commanding 60/100, Redstone 90/100, Stuff Maker 50/100')
    };
    if (message.content === '/members =[TECH]= ') {
        message.channel.send('TechnicRain8, The best in this server, good at everything. **SKILLS** Building 100/100, Commanding 80/100, Redstone 80/100, Stuff Maker 100/100')
    };
    if (message.content === '/members wolfy dude') {
        message.channel.send('Billyon133, The noob of this server, cool but bad at lots of stuff. **SKILLS** Building 100/100, Commanding 39/100, Redstone 12/100, Stuff Maker 70/100')
    };
    if (message.content === '/members Pgz_epicgamerplayz') {
        message.channel.send('CutSkydiver16, The opposite of this server, disagrees lots of stuff. **SKILLS** Building 86/100, Commanding 60/100, Redstone 80/100, Stuff Maker 100/100')
    };
    if (message.content === '/fact') {
        var facts = ["Kingcraft was made in 2020!", "Kingcraft have 5 members!", "We have weird nicknames!", "Moss stone was invented by moses because his nickname was moss!", "This community is cool!", "Moses is kinda noob", "Challenges was made by CUT AND WOLF!", "Giveaways are for the new pe.kcserver.ga", "Open kingcraft", "e", "More facts coming soon!", "Facts were from BCpig"];
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