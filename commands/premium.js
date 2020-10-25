const { RichEmbed } = require("discord.js")

module.exports = {
    name: "premium",
    description: "Pokazuje infomacje Premium.",
    
    run(msg, args) {
        const { channel } = msg

        const exampleEmbed = new RichEmbed()

        .setColor('#EC61FF')
        .setTitle('<a:anq:769567482116964372> **PREMIUM**')
        .setDescription('Aby dowiedzieć się więcej o premium zobacz na poniższe komendy')
        .setThumbnail('https://cdn.discordapp.com/attachments/720006569949003886/769562995013451836/Premium.png')
        .addField('!info-premium', 'Pokazuje informacje o całej akcesorii.')
        
        channel.send(exampleEmbed);
    }
}