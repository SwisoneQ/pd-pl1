const { Client, RichEmbed } = require("discord.js")
const chalk = require("chalk")
const db = require('quick.db')
const ms = require('parse-ms')

const { token } = require("./config/config.js")

const commandHandler = require("./handlers/command.handler")

const client = new Client()

const log = console.log

// Initalize command handler
commandHandler(client)

client.on('ready', () => {
    log(chalk.blue(`Logged in as ${client.user.tag}!`))
})

client.login(token)

// Error handler - omit crashed
client.on("debug", () => {})
client.on("error", () => {})
client.on("warn", () => {})

