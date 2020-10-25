const { RichEmbed } = require("discord.js")

module.exports = {
    name: "bot-info",
    description: "Pokazuje infomacje o bocie.",

    run(msg, args) {
        const { channel } = msg

    const exampleEmbed = new RichEmbed()
    
	.setColor('#0099ff')
	.setTitle('**INFORMACJE O PANDACRAFT BOT**')
	.setDescription('Witaj! Jestem **PandaCraft Bot** moim zadaniem jest Ci umilić pobyt na serwerze.')
	.setThumbnail('https://cdn.discordapp.com/attachments/759134370346434621/768529364252885023/unknown.png')
    .addField('<a:c_:768916548890656798> **AUTOR BOTA**', 'Masking')
    .addField('<:be:769556983849549864> **SERWER**', 'PandaCraft')
    .addField('<a:aa:769071625907470336> **ID**', '768559520942129202')
    .addField('<:ah:769305206852157500> **AKTUALIZACJA**', '24.10.2020 15:35')
    .addField('<a:ai:769557279720210452> **AKCESORIA**', 'brak')
    .addField('<a:PD:769559294075994155> **PING**', 'Od 23 do 46')
    .setTimestamp()
    
    channel.send(exampleEmbed);


    }
}
