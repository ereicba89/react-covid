import axios from 'axios'
import { CountrySelect } from '../components'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let altUrl = url;

    if (country) {
        altUrl = `${url}/countries/${country}`;
      }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(altUrl)

        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        throw error
    }
}


export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const  modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        console.log(modifiedData);

        return modifiedData
    } catch (error) {
        throw error
    }
}

// export const fetchCountry = async (country) => {
//     try {
//         const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${url}/countries/${country}`)
//         return { confirmed, recovered, deaths, lastUpdate }
//     } catch (error) {
//         throw error
//     }
// }


export const fetchCountries = async () => {
    try {
        const { data: { countries} } = await axios.get(`${url}/countries`)
        return countries.map((country)=> country.name)
    } catch (error) {
        throw error
    }
}
