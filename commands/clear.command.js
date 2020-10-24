module.exports = {
    name: "clear",
    description: "Czysć określoną ilość wiadomości na kanale",
    args: true,
    // !clear <amount>
    usage: "<amount>",
    guildOnly: true,
    // ! purge
    aliases: ["purge"],

    run(msg, args) {
        const { channel } = msg
        
        const amount = parseInt(args[0])
        
        if (!Number.isInteger(amount)) {
            return channel.send("<a:ad:769183483732951051> Nie jest to poprawne! Sprecyzuj wiadomość.")
        }

        if (amount < 2 || amount > 150) {
            return channel.send('<a:ad:769183483732951051> Ilość wiadomości do usunięcia musi być więsksza od 1 ale mniejsza niż 150')
        }

        channel.bulkDelete(amount)
    }
}
