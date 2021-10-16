import Page from "./Page.js";
import PokemonCard from "./PokemonCard.js";

const content = document.querySelector("body");
const aCommonSinglePage = new Page(content);

const card = document.querySelector("main");
const pokemonCard = new PokemonCard(card, "", "");
