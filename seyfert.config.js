// @ts-check
const { config } = require('seyfert');

if (!process.env.DISCORD_TOKEN) throw new Error("No DISCORD_TOKEN variable found")

module.exports = config.bot({
   token: process.env.DISCORD_TOKEN,
   intents: ["Guilds"],
   locations: {
       base: "src",	
       output: "dist", //If you are using bun, set "src" instead
       commands: "commands"
   }
});