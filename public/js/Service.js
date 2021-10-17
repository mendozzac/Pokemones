class Service {
  url = "https://pokeapi.co/api/v2/pokemon/1";

  async getPokemonList() {
    const response = await fetch(this.url);
    const pokemons = await response.json();
    return pokemons;
  }
}

export default Service;
