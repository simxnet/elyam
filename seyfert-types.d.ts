import type { ParseClient, Client } from "seyfert"

declare module "seyfert" {
    interface UsingClient extends ParseClient<Client<true>> { }
    // interface UsingClient extends ParseClient<WorkerClient<true>> { }
    // interface UsingClient extends ParseClient<HttpClient> { }
}

export default undefined
