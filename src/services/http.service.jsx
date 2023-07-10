import axois from 'axios'
import config from '../config.json'
import {getGeolocation} from '../services/geo.service'

export const getWeather = async (sityName) => {
  const API_key = config.API_key

  const geoData = await getGeolocation(sityName)
  console.log('geoData :>> ', geoData)
  // const [lat, lon] = getGeolocation(sityName)

  // const apiEndPoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_key}`

  // const endLinkPoint = config.apiEndPoint
  // const data = await axois.get(apiEndPoint)
  // return data
}
