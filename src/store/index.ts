import { createStore } from "vuex";
import api from "../api";
import VuexPersistence from "vuex-persist";


const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    teamList: [],
    team: {
      id: "",
      name: "",
      pokemonsChoosed: [],
    },
    pokemons: [],
    detailPokemon: [],
  },
  getters: {},
  mutations: {
    addPokemons(state: any, payload: any): any {
      state.team.pokemonsChoosed.push(payload);
    },
    addUserToState(state, payload): any {
      state.team.name = payload;
    },
    setPokemons(state, payload): void {
      Object.assign(state.pokemons, payload);
    },
    setDetailsPokemons(state, payload: any): void {
      state.detailPokemon.push(payload);
    },
    generateIdTeam(state, idTeam): void {
      state.team.id = idTeam;
    },
    fullTeam(state: any, payload: any): void {
      state.teamList.push(payload);
    },
    cleanTeam(state: any): void {
      state.team = {
        id: "",
        name: "",
        pokemonsChoosed: [],
      };
    },
    deleteSavedTeam(state, payload) {
      state.teamList.splice(payload, 1);
    },
    deletePokemonTeamSelected(state, payload) {
      state.team.pokemonsChoosed = state.team.pokemonsChoosed.filter((pokemon: any) => pokemon.name !== payload)
    },
    editTeam(state, teamId) {
      Object.assign(state.team, teamId);
    },
  },
  actions: {
    getAllPokemons(context, [limit, offset]): void {
      api
        .get(`pokemon?limit=${limit}&offset=${offset}`)
        .then((response: any) =>
          context.commit("setPokemons", response.data.results)
        );
    },
    getDetailsPokemons(context, pokemonId) {
      api
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) =>
          context.commit("setDetailsPokemons", response.data)
        );
    },
    getEventId(context) {
      context.commit("generateIdTeam");
    },
  },
  // plugins: [vuexLocal.plugin],
});
