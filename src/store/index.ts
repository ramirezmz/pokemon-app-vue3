import { createStore } from 'vuex'
import api from '../api'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
   storage: window.localStorage
})

export default createStore({
   state: {
      teamList: [],
      team: {
         id: "",
         name: "",
         pokemonsChoosed: []
      },
      pokemons: [],
      detailPokemon: []
   },
   getters: {},
   mutations: {
      addPokemons(state: any, payload: any):any  {
         state.team.pokemonsChoosed.push(payload)
      },
      addUserToState(state, payload):any  {
         state.team.name = payload
      },
      setPokemons(state, payload):void  {
         Object.assign(state.pokemons, payload)
      },
      setDetailsPokemons(state, payload: any):void  {
         state.detailPokemon.push(payload)
      },
      generateIdTeam(state: any):void {
         state.team.id = Math.floor(Math.random() * 100)
      },
      fullTeam(state:any, payload:any):void {
         state.teamList.push(payload)
      },
      cleanTeam(state: any): void {
         state.team = {
            id: "",
            name: "",
            pokemonsChoosed: []}
      },
      deleteSavedTeam(state, payload) {
         state.teamList.splice(payload, 1)
      },
      deletePokemonTeamSelected(state, payload) {
         console.log(state.team.pokemonsChoosed.splice(payload, 1))
         console.log(payload);
         console.log(state.team.pokemonsChoosed);
      },
      editTeam(state, teamId) {
         Object.assign(state.team, state.teamList[teamId])
         console.log(state.team);
      }
   },
   actions: {
      getAllPokemons(context, [limit, offset]):void {
         api.get(`pokemon?limit=${limit}&offset=${offset}`)
         .then((response: any) => context.commit("setPokemons", response.data.results))
      },
      getDetailsPokemons(context, pokemonId) {
         api.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
         .then((response) => context.commit("setDetailsPokemons", response.data))
      },
      getEventId(context) {
         context.commit('generateIdTeam')
      }
   },
   modules: {},
})