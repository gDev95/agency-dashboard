import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link: new HttpLink({ uri: `${process.env.REACT_APP_BASE_API_URL}/graphql` })
});

export default client;
