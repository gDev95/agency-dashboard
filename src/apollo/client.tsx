import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache,
    uri: process.env.REACT_APP_BASE_API_URL ? `${process.env.REACT_APP_BASE_API_URL}/graphql` : "/graphql",
});
