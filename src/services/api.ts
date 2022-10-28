import axios, { AxiosHeaders, AxiosResponse } from "axios";

import { PokemonData } from "./types";

const api = "https://pokeapi.co/api/v2";

const apiPoker = axios.create({
  baseURL: `${api}`,
});

export const apis = {
  get: axios.get,

  getPokemons: async () =>
    apiPoker.get<PokemonData>("/pokemon?limit=20&offset=0"),
};
