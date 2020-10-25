const { RichEmbed } = require("discord.js")

module.exports = {
    name: "zespol",
    description: "Pokazuje zespół PandaCraft",
    
    run(msg, args) {
        const { channel } = msg
    
        const exampleEmbed = new RichEmbed()

        .setColor('#00E9CD')
        .setTitle('**ZESPÓŁ SERWERA PANDACRAFT**')
        .setDescription('Nasz zespół składa się z 14 osób.')
        .setThumbnail('https://cdn.discordapp.com/attachments/759134370346434621/768529364252885023/unknown.png')
        .addField('<a:h_:769071236595843072> **WŁAŚCICIEL**', 'P4nd4')
        .addField('<a:a_:768811763709771778> **DISCORD HELPER**', 'Masking')
        .addField('<a:aa:769071625907470336> **ZESPÓŁ BUDOWLANYCH**', 'Kacper, Olukas, Akida, _Domekpl, Covix, dobrawka, Kaweciak, Masking, mr_agnet, !Pocieszkax')
        .addField('<a:dab:769641045650440212> **ZESPÓŁ SPOŁECZNY**', 'somi, WhiteFOxie, Zetu, Masking' )
        channel.send(exampleEmbed);
    
    }
}