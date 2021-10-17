class Service {
  url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20";
  constructor(url) {
    this.url = url;
  }
  async getPokemonList(url) {
    const response = await fetch(url);
    const pokemons = await response.json();
    return pokemons;
  }
}

export default Service;
