import axios from 'axios'
const { REACT_APP_MACHINES_API } = process.env
export const machines = axios.create({
  baseURL: REACT_APP_MACHINES_API,
  headers: {
    'Content-Type': 'application/json'
  }
})
