import Header from "./Header/Header.js";
import Page from "./PageComponent/Page.js";
import PokemonCard from "./PokemonCard/PokemonCard.js";
import Service from "./Service.js";

const header = document.querySelector("body");
const aCommonSingleHeader = new Header(header);

const content = document.querySelector("body");
const aCommonSinglePage = new Page(content);

const card = document.querySelector("main");
const pokemonCard = new PokemonCard(card, "", "");

const pokeService = new Service();
