import axios from 'axios'
import config from './config'

let instance = axios.create({
    baseURL: config.base,
    timeout: 10000
})

instance.interceptors.request.use(config => { 
    return config
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(config => {
    return 
})