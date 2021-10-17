import Header from "./Header/Header.js";
import Page from "./PageComponent/Page.js";
import PokemonCard from "./PokemonCard/PokemonCard.js";
import Service from "./Service.js";

const pokeService = new Service();
const header = document.querySelector("body");
const aCommonSingleHeader = new Header(header);

const content = document.querySelector("body");
const aCommonSinglePage = new Page(content);

const card = document.querySelector(".main-box");
const pokemonCard = new PokemonCard(card, "", "");

(async () => {
  pokemonService = new Service();
  const pokemonElements = await pokemonService.getPokemonList();
  pokemons = pokemonElements.results;
  const pokemones = pokemons.map(
    (pokemon) =>
      new PokemonCard(element.querySelector(".main-box"), pokemon.url)
  );
})();
