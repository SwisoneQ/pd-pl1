const { Permissions: { FLAGS } } = require("discord.js")

module.exports = {
    name: "clear",
    description: "Czysć określoną ilość wiadomości na kanale",
    args: true,
    // !clear <amount>
    usage: "<amount>",
    guildOnly: true,
    // ! purge
    aliases: ["purge"],
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.MANAGE_MESSAGES],

    run(msg, args) {
        const { channel, member, guild } = msg
                
        const amount = parseInt(args[0])
        
        if (!Number.isInteger(amount)) {
            return channel.send("<a:ad:769183483732951051> Nie jest to poprawne! Sprecyzuj wiadomość.")
        }

        if (amount < 2 || amount > 450) {
            return channel.send('<a:ad:769183483732951051> Ilość wiadomości do usunięcia musi być więsksza od 1 ale mniejsza niż 450')
        }

        channel.bulkDelete(amount)
    }
}
