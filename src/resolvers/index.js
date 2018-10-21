// ./graphql/resolvers.js
import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const resolversArray = fileLoader(path.join(__dirname, './resolver'))

export default mergeResolvers(resolversArray)
