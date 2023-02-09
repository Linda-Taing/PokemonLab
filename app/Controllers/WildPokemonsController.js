import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { Pop } from "../Utils/Pop.js"
import { wildPokemonsService } from "../Services/WildPokemonsService.js"

function _drawPokemons() {
    let template = ''
    appState.pokemons.forEach(p => template += p.WildTemplate)
    setHTML('wildPokemon', template)

}


export class WildPokemonsController {
    constructor() {
        this.getPokemons()
        appState.on('pokemons', _drawPokemons)
        console.log('Wild Pokemon Controller');
    }
    async getPokemons() {
        try {
            await wildPokemonsService.getPokemons()
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }

    async getPokemonByName(url) {
        try {
            await wildPokemonsService.getPokemonByUrl(url)
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }

}