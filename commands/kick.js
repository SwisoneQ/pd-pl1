const { Permissions: { FLAGS } } = require("discord.js")

module.exports = {
    name: "kick",
    description: "Wyrzuca użytkownika z serwera.",
    args: true,
    usage: "<user> [reason]",
    botPermissions: [FLAGS.ADMINISTRATOR],
    botPermissions: [FLAGS.ADMINISTRATOR],

    run(msg, args) {
        const { channel, guild, author, mentions } = msg

        const reasonArg = [...args].slice(1).join(" ")
        const userToKick = mentions.users.first()
        
        if (!userToKick) {
            return msg.reply("You must provide a vaild user to kick.")
        }

        if (userToKick.id === author.id) {
            return msg.reply("You can't kick yourself!")
        }

        const memberToKick = guild.members.cache.get(userToKick.id)

        if (!memberToKick.kickable) {
            return channel.send("Potrzebuje więcej permisji do użycia tej komendy")
        }
    },
}