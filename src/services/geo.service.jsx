import axois from 'axios'
import config from '../config.json'

export const getGeolocation = async (sityName) => {
  const API_key = config.API_key
  const link = `http://api.openweathermap.org/geo/1.0/direct?q=${sityName}&limit=5&appid=${API_key}`

  const geoData = await axois.get(link)
  return geoData
}

