import Component from "../Component/Component.js";
import Service from "../Service.js";
import Page from "../PageComponent/Page.js";

class PokemonCard extends Component {
  url;
  image;
  name;
  pokemons = [];

  constructor(parentElement, url, image, name) {
    super(parentElement, "card", "li");
    this.name = name;
    this.image = image;
    this.url = url;

    (async () => {
      this.pokemonService = new Service();

      const pokemonElements = await this.pokemonService.getPokemonList();
      console.log(pokemonElements);
      this.name = pokemonElements.name;
      this.imgen = pokemonElements.sprites.other.dream_world.front_default;
      console.log(pokemonElements);
      this.generateHTML();
    })();
  }
  generateHTML() {
    const html = `<a class="card">
    <img src="${this.image}" alt="${this.name}"/>
    <span>${this.name}</span>
    </a>`;
    this.element.innerHTML = html;
  }
}

export default PokemonCard;
