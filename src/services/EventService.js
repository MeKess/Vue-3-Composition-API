import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/MeKess/Vue-3-Composition-API-',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },

  //Added new call
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
