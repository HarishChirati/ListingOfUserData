import axios from 'axios'
const API = 'https://randomuser.me/api/'

const http = axios.create({
  baseURL: API
})

export default http