import  axios from 'axios'

const api = axios.create({
   baseURL: "https://pokeapi.co/api/v2"
})

export default {
   async get(uri: string) {
      return await api.get(uri)
   }
}