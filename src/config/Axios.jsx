import axios from 'axios'


const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

export default axiosClient

console.log(import.meta.env.VITE_BACKEND_URL)