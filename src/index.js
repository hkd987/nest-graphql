import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import ThermostatAPI from './thermostat_class'
import AccessTokenAPI from './access_token_class'
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  datasources: () => {
    return {
      ThermostatAPI: new ThermostatAPI(),
      AccessTokenAPI: new AccessTokenAPI()
    }
  },
  context: ({ req }) => {
    return {
      access_token: req.headers.Authorization ? req.headers.Authorization : null
    }
  }
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
