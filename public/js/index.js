import Header from "./Header/Header.js";
import Page from "./PageComponent/Page.js";
import PokemonCard from "./PokemonCard/PokemonCard.js";
import Service from "./Service.js";

const header = document.querySelector("body");
const aCommonSingleHeader = new Header(header);

const content = document.querySelector("body");
const aCommonSinglePage = new Page(content);

const card = document.querySelector(".main-box");
const pokemonCard = new PokemonCard(card, "", "");

const pokeService = new Service();

(async () => {
  this.pokemonService = new Service();
  const pokemonElements = await this.pokemonService.getPokemonList();
  this.pokemons = pokemonElements.results;
  const pokemones = this.pokemons.map(
    (pokemon) =>
      new PokemonCard(this.element.querySelector(".main-box"), pokemon.url)
  );
})();
