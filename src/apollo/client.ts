import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
console.log("APP_BASE_API_URL", process.env.REACT_APP_BASE_API_URL);
console.log("What envs do we have", process.env);
export const client = new ApolloClient({
    cache,
    link: new HttpLink({ uri: process.env.REACT_APP_BASE_API_URL ? `${process.env.REACT_APP_BASE_API_URL}/graphql` : '/graphql' })
});
