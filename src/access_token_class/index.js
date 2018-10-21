import { RESTDataSource } from 'apollo-datasource-rest'

export class AccessTokenAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://api.home.nest.com/oauth2/'
  }

  needAccess (clientId, clientSecret, code, grantType) {
    this.post(`access_token`, {
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      grant_type: grantType
    })
  }
}
