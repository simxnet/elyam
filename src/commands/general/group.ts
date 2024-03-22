import { AutoLoad, Command, CommandContext, Declare } from "seyfert"

@Declare({
	name: "general",
	description: "general commands group",
})
@AutoLoad()
export default class Group extends Command {
	onMiddlewaresError(context: CommandContext, error: string) {
		return context.editOrReply({
			content: error
		})
	}
}
