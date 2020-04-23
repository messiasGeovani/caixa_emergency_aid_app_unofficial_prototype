// api services
const env = require('../../.env.json') || undefined
import axios from 'axios'

const api = axios.create({
    baseURL: env.apiUrl
})

const rateApp = async (data) => {
    console.log(env.apiUrl)
    await api.post('/evaluation', data)
        .then((restult) => {
            return restult.data
        })
}

export { rateApp }