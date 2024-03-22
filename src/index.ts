import { Client, type ParseClient, type ParseMiddlewares } from "seyfert"
import middlewares from "./middlewares"

const client = new Client()

client.start().then(() => client.uploadCommands())

client.setServices({
	middlewares,
})

declare module "seyfert" {
	interface UsingClient extends ParseClient<Client<true>> {}
	// interface UsingClient extends ParseClient<WorkerClient<true>> { }
	// interface UsingClient extends ParseClient<HttpClient> { }

	interface RegisteredMiddlewares
		extends ParseMiddlewares<typeof middlewares> {}
}
