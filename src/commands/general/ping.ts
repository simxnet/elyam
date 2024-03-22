import { type CommandContext, Declare, SubCommand } from "seyfert"

@Declare({
    name: "ping",
    description: "Elyam latency",
})
export default class UserCommand extends SubCommand {
    async run(ctx: CommandContext) {
        const ping = ctx.client.gateway.latency

        await ctx.write({
            content: `The ping is \`${ping}ms\``,
        })
    }
}
