import { RESTDataSource } from 'apollo-datasource-rest'

export class ThermostatAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://developer-api.nest.com/devices/thermostats/'
  }

  willSendRequest (request) {
    request.headers.set('Authorization', `${this.context.access_token}`)
  }

  async getThermostatId (id) {
    return this.get(`${id}/device_id`)
  }

  async getThermostatLocale (id) {
    return this.get(`${id}/locale`)
  }

  async getThermostatSoftware (id) {
    return this.get(`${id}/software_version`)
  }

  async getThemostatStructureId (id) {
    return this.get(`${id}/structure_id`)
  }
  async getThermostatName (id) {
    return this.get(`${id}/name`)
  }

  async getThermostatNameLong (id) {
    return this.get(`${id}/name_long`)
  }

  async getThermostatLastConnection (id) {
    return this.get(`${id}/last_connection`)
  }

  async isThermostatOnline (id) {
    return this.get(`${id}/is_online`)
  }

  async canThermostatCool (id) {
    return this.get(`${id}/can_cool`)
  }

  async canThermostatHeat (id) {
    return this.get(`${id}/can_heat`)
  }

  async isThermostatUsingEmergencyHeat (id) {
    return this.get(`${id}/is_using_emergency_heat`)
  }

  async canThermostatFan (id) {
    return this.get(`${id}/has_fan`)
  }

  async isThermostatFanTimerActive (id) {
    return this.get(`${id}/fan_timer_active`)
  }

  async isThermostatFanTimerTimeout (id) {
    return this.get(`${id}/fan_timer_timeout`)
  }

  async doesThermostatHaveLeaf (id) {
    return this.get(`${id}/has_leaf`)
  }

  async whatIsThermostatTempScale (id) {
    return this.get(`${id}/temperature_scale`)
  }

  async whatIsThermostatTempTargetF (id) {
    return this.get(`${id}/target_temperature_f`)
  }

  async whatIsThermostatTempTargetC (id) {
    return this.get(`${id}/target_temperature_c`)
  }

  async whatIsThermostatTempTargetHighF (id) {
    return this.get(`${id}/target_temperature_high_f`)
  }

  async whatIsThermostatTempTargetHighC (id) {
    return this.get(`${id}/target_temperature_high_c`)
  }

  async whatIsThermostatTempTargetLowF (id) {
    return this.get(`${id}/target_temperature_low_f`)
  }

  async whatIsThermostatTempTargetLowC (id) {
    return this.get(`${id}/target_temperature_low_c`)
  }

  async whatIsThermostatTempEcoHighF (id) {
    return this.get(`${id}/eco_temperature_high_f`)
  }

  async whatIsThermostatTempEcoHighC (id) {
    return this.get(`${id}/eco_temperature_high_c`)
  }

  async whatIsThermostatTempEcoLowF (id) {
    return this.get(`${id}/eco_temperature_low_f`)
  }

  async whatIsThermostatTempEcoLowC (id) {
    return this.get(`${id}/eco_temperature_low_c`)
  }
}
