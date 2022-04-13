import { createStore } from 'vuex'
import api from '../api'

export default createStore({
   state: {
      users: [],
      user: "Robertopaolo",
      pokemons: []
   },
   getters: {},
   mutations: {
      addUserToState(state, payload) {
         state.user = payload
      },
      setPokemons(state, payload) {
         Object.assign(state.pokemons, payload)
      }
   },
   actions: {
      getAllPokemons(context, [limit, offset]) {
         api.get(`pokemon?limit=${limit}&offset=${offset}`)
         .then((response: object) => context.commit("setPokemons", response.data.results))
      }
   },
   modules: {}
})