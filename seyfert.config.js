// @ts-check
require("dotenv").config()
const { config } = require("seyfert")

if (!process.env.DISCORD_TOKEN)
	throw new Error("No DISCORD_TOKEN variable found")

module.exports = config.bot({
	token: process.env.DISCORD_TOKEN,
	intents: ["Guilds"],
	debug: false,
	locations: {
		base: "src",
		events: "events",
		output: "dist", //If you are using bun, set "src" instead
		commands: "commands",
	},
})
