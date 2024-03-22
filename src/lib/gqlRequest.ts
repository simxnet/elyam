const url = "https://api.dbots.fun";

export interface GraphQLError {
    errors: {
        message: string
    }[]
    data: null
}


export default async function graphqlRequest<T>(query: string, variables?: unknown, operationName?: string) {
    return (await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzY3MDA3ODAxNzU4MzExMDAiLCJhY2Nlc3NfdG9rZW4iOiJ4MlBGWHRPbXBqOWVNZGU2dldsSEx0UTZVVHhHd24iLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJlc19pbiI6NjA0ODAwLCJpYXQiOjE3MTA2ODUwNDEsImV4cCI6MTcxMDc3MTQ0MX0.5HRxVXgl_xOx387mqUd9P1mV25BSBUkaPvsuiVP6Oe4"
        },
        body: JSON.stringify({
            query,
            variables,
            operationName
        })
    })).json() as T
}