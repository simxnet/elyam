import { AutoLoad, Command, Declare } from "seyfert"

@Declare({
	name: "general",
	description: "general commands meta",
})
@AutoLoad()
export default class Meta extends Command {}
