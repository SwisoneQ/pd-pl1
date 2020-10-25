const { RichEmbed } = require("discord.js")

module.exports = {
    name: "pandacraft-info",
    description: "",
    
    run(msg, args) {
        const { channel } = msg

        const exampleEmbed = new RichEmbed()
        .setColor('#00E9CD')
        .setTitle('**🐼PANDACRAFT🐼 SERWER**')
        .setDescription('PandaCraft czyli serwer którego trybem jest FreeBuild + RPG + Dynamiczny Świat, jest to jeden tryb lecz ma ogrom opcji. Nasz serwer jest serwerem jedynym takim na rynku Minecraft! Nie będziesz się u nas nudził bo mamy opcje od misji aż po walki z kastomowymi mobami!')
        .setThumbnail('https://cdn.discordapp.com/attachments/759134370346434621/768529364252885023/unknown.png')
        .addField('<a:h_:769071236595843072> **WŁAŚCICIEL**', 'P4nd4')
        .addField('<a:e_:768924749124337704> **ADRES SERWERA**', 'pandacraft.pl')
        .addField('<a:ai:769557279720210452> **WERSJA**', '1.16.3')
        .addField('<a:PD:769559294075994155> **MAX GRACZY**', '10')
        .addField('<a:AB:769071990710468618> **CRAFTLISTA**', 'https://craftlista.pl/serwer/pandacraft.pl:25565/ Tutaj możesz się dowiedzieć parę informacji możesz również dać nam serduszko i wystawić opinię!')
        .addField('<a:ayu:769664407650959402> **STRONA PANDACRAFT**', 'brak')
        .addField('<a:ayi:769665082387857408> **DISCORD PANDACRAFT**', 'Oficjalny link ( https://discord.gg/fUNvxbu ) Jest to jeden z najważniejszych komunikatorów naszego serwera.')
        .addField('<a:fb:769666138707066920> **FACEBOOK**', 'https://www.facebook.com/groups/740042543413169 Jest to komunikator na którym znajdziesz posty.')
    
        channel.send(exampleEmbed);
    }
}