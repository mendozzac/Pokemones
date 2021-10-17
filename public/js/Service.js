class Service {
  offset = 0;
  url = "https://pokeapi.co/api/v2/pokemon?limit=10&$`{offset=0}`";

  async getPokemonList() {
    const response = await fetch(this.url);
    const pokemons = await response.json();
    return pokemons;
  }
}

export default Service;
