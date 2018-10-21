export default {
  Query: {
    needAccess: (_source, args, { dataSources }) => {
      return dataSources.AccessTokenAPI.needAccess(args)
    }
  }
}
