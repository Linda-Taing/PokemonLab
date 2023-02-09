import { appState } from "../AppState.js"
import { pokeApi, sandboxApi } from "./AxiosService.js"
import { WildPokemon } from "../Models/WildPokemon.js"


class WildPokemonsService {

    async getPokemons() {
        const res = await pokeApi.get()
        console.log('[get pokemon??]', res.data)
        appState.pokemons = res.data.results

    }
    async getPokemonByUrl(url) {
        const res = await sandboxApi.get(url)
        console.log('DATA URL', res.data)
    }


}

export const wildPokemonsService = new WildPokemonsService()
