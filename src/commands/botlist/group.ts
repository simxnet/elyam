import { AutoLoad, Command, CommandContext, Declare, Middlewares } from "seyfert"

@Declare({
    name: "botlist",
    description: "botlist commands group",
})
@AutoLoad()
@Middlewares(["reviewerMiddleware"])
export default class Group extends Command {
    onMiddlewaresError(context: CommandContext, error: string) {
        return context.editOrReply({
            content: error
        })
    }

    async onRunError(context: CommandContext, error: unknown) {
        await context.editOrReply({
            content: error instanceof Error ? error.message : `Error: ${error}`
        });
    }
}
