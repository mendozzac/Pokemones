import Component from "../Component/Component.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";
import Service from "../Service.js";

class Page extends Component {
  constructor(parentElement) {
    super(parentElement, "app", "div");
    this.pokemonService = new Service();

    (async () => {
      const pokemonElements = await this.pokemonService.getPokemonList();
      this.pokemons = pokemonElements.results;
      const pokemones = this.pokemons.map(
        (pokemon) =>
          new PokemonCard(this.element.querySelector(".main-box"), pokemon.url)
      );
      console.log(pokemones);
    })();
    this.generateHTML();
  }
  generateHTML() {
    const html = ` 
    <main>
      <div class="main-box"></div>
    </main>`;
    this.element.innerHTML = html;
  }
}

export default Page;
