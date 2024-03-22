import { createEvent } from "seyfert"

export default createEvent({
	data: {
		name: "botReady",
	},
	run: async (_, _client) => {
		console.log("Bot ready")
	},
})
