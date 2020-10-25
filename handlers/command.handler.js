const { Collection } = require("discord.js")

const { readdirSync } = require("fs")

const { prefix } = require(__dirname + "/../config/config.js")

const ascii = require("ascii-table")
const { botPermissions } = require("../commands/clear")

const table = new ascii().setHeading("Command", "Load status")

module.exports = (client) => {
    // Collections
    client.commands = new Collection()

    const commandFiles = readdirSync(__dirname + "/../commands").filter((file) =>
    file.endsWith(".js")
)

for ( const file of commandFiles) {
    const command = require(__dirname + `/../commands/${file}`)

    if (command.name) {
        client.commands.set(command.name, command)
        table.addRow(file, '✅')
    } else {
        table.addRow(file, '❌ -> missing name')
        continue
    }
    }
    // Display Ascii table
    console.log(table.toString())

    
    client.on('message', (msg) => {
        const { author, guild, channel } = msg
        
        // Check if user is a bot
        if (author.bot) return
        
        // Ignore messages without prefix
        if (msg.content.startsWith(prefix)) return
    
        const args = msg.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g)
    
        const cmdName = args.shift().toLowerCase()

        const cmd = 
        client.commands.get(cmdName) || 
        client.commands.find
          (cmd => cmd.aliases && cmd.aliases.includes(cmdName),
          )

          // Check if commands exist
          if (!cmd) return

        if (cmd.guildOnly && !guild) {
           return msg.reply("I cant't execute that command inside DMs!")
        }

        // =========================
        //
        // Check permissions
        //
        // =========================
        // Check bot permissions
        if (cmd.botPermissions && cmd.botPermissions.length) {
            if (!guild.me.permissionsIn(channel).has(cmd.botPermissions)) {
                return channel.send(`Potrzebuję więcej permisji! Wymagane permisje \`${cmd.botPermissions.join(
                    "`,`",
                    )}\`.`)
                }
            }
    

        // Check user permissions
        if (cmd.userPermissions && cmd.userPermissions.length) {
            if (!msg.member.permissionsIn(channel).has(cmd.userPermissions)) {
                return msg.reply("**Masz wymagane permisje**")
        }
        }

        if (cmd.args && !args.length) {
            let reply = `<a:ad:769183483732951051> **Nie podałeś argumentu!** ${msg.author}!`
            
            if (cmd.usage) {
                reply += `\n**Poprawne użycie:** \`${prefix}${cmdName} ${cmd.usage}\``
            }
            
            return msg.channel.send(reply)
                    
        }

        try {
            cmd.run(msg, args)
        } catch(error) {
            console.log(error)
            msg.reply("There was an error tryiang to execute that command!")
        }
    })
}