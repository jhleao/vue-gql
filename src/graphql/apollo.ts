import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})
