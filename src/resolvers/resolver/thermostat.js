export default {
  Query: {
    getThermostatId: async (_source, { id }, { dataSources }) => {
      return dataSources.ThermostatAPI.getThermostatId(id)
    },
    getThermostatLocale: async (_source, { id }, { dataSources }) => {
      return dataSources.ThermostatAPI.getThermostatLocale(id)
    },
    getThermostatSoftware: async (_source, { id }, { dataSources }) => {
      return dataSources.ThermostatAPI.getThermostatSoftware(id)
    }
  }
}
