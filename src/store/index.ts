import { createStore } from 'vuex'
import api from '../api'

export default createStore({
   state: {
      team: {},
      user: "Robertopaolo",
      pokemons: [],
      // detailsPokemons: [],
      pokemonSelected: []
   },
   getters: {},
   mutations: {
      //Get pokemonSelected
      addPokemons(state, payload) {
         state.pokemonSelected.push(payload)
      },

      addUserToState(state, payload) {
         state.user = payload
      },
      setPokemons(state, payload) {
         Object.assign(state.pokemons, payload)
      },
      // setDetailsPokemons(state, payload: Object) {
      //    state.detailsPokemons.push(payload)
      // }
   },
   actions: {
      getAllPokemons(context, [limit, offset]) {
         api.get(`pokemon?limit=${limit}&offset=${offset}`)
         .then((response: object) => context.commit("setPokemons", response.data.results))
      },
      // getDetailsPokemons(context, pokemonId) {
      //    api.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      //    .then((response) => context.commit("setDetailsPokemons", response.data))
      // }
   },
   modules: {}
})