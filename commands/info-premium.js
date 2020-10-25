const { RichEmbed } = require("discord.js")

module.exports = {
    name: "info-premium",
    description: "Pokazuje infomacje Premium.",
    
    run(msg, args) {
        const { channel } = msg

        const exampleEmbed = new RichEmbed()

        .setColor('#B3B3B3')
        .setTitle('**INFORMACJE PREMIUM**')
        .setDescription('Tutaj się dowiesz część informacji o premium.')

        channel.send(exampleEmbed);
    }
}