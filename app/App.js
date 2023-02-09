import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonsController } from "./Controllers/WildPokemonsController.js";


class App {
  wildPokemonsController = new WildPokemonsController()
}

window["app"] = new App();
