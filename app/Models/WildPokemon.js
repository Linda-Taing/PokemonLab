import { wildPokemonsService } from "../Services/WildPokemonsService.js"
import { Pop } from "../Utils/Pop.js"

export class WildPokemon {
    constructor(data) {
        this.name = data.name
        this.url = data.url

    }

    get WildTemplate() {
        return ` <div class="col-12 text-center">
        <button onclick="app.wildPokemonsController.getPokemonByName('${this.url}')" class="btn mb-3 btn-outline-danger w-100 fw-bold">${this.name}</button>
        </div>`
    }


}