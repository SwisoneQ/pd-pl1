const { RichEmbed } = require("discord.js")

module.exports = {
    name: "help-info",
    description: "Pokazuje wszystkie komendy.",

    run(msg, args) {
        const { channel } = msg

    const exampleEmbed = new RichEmbed()
    
    
	.setColor('#0099ff')
	.setTitle('**KOMENDY**')
	.setDescription('Gdy używasz komendy pamiętaj o ``!`` moim prefixie.')
	.setThumbnail('https://cdn.discordapp.com/attachments/759134370346434621/768529364252885023/unknown.png')
    .addField('<a:c_:768916548890656798> **PRAKTYCZNE**', '```bot-info,```')
    .addField('<a:d_:768918424935202906> **ADMINISTRACYJNE**', '```clear```')
    .addField('<a:B_:768816560059318282> **4FUN**', '```brak```')
    .addField('<a:g_:769067979236179969> **ZWYKŁE**', '```pandacraft-info, zespol, premium, ping```')
    .setTimestamp()
    
    channel.send(exampleEmbed);


    }
}
