import { Command, type CommandContext, Declare } from "seyfert"

@Declare({
	name: "ping",
	description: "display bot's ping",
})
export default class PingCommand extends Command {
	async run(ctx: CommandContext) {
		const ping = ctx.client.gateway.latency

		await ctx.write({
			content: `The ping is \`${ping}\``,
		})
	}
}
