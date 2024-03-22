import { type CommandContext, Declare, Embed, SubCommand } from "seyfert"
import graphqlRequest, { type GraphQLError } from "../../lib/gqlRequest"

const query = `
    query Pending($filters: GetBotFormInput) {
        bots(filters: $filters) {
            nodes {
                name
                id
            }
        }
    }
`

interface PendingData {
	data: {
		bots: {
			nodes: {
				name: string
				id: string
			}[]
		}
	}
}

@Declare({
	name: "pending",
	description: "display pending bots",
})
export default class UserCommand extends SubCommand {
	async run(ctx: CommandContext) {
		const req = await graphqlRequest<PendingData | GraphQLError>(
			query,
			{ filters: { status: "Pending" } },
			"Pending",
		)

		if (!req.data) {
			throw new Error(req.errors[0].message)
		}

		return ctx.write({
			embeds: [
				new Embed({
					title: "Pending bots",
					description: req.data.bots.nodes.length
						? req.data.bots.nodes
								.map((x) => `[**${x.name}**](https://dbots.fun/bot/${x.id})`)
								.join("\n")
						: "No pending bots",
				}),
			],
		})
	}
}
