import Component from "../Component/Component.js";

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
    this.generateHTML();
  }
  generateHTML() {
    const html = `<a class="card__link">
    <img src="${this.image}" alt="${this.name}"/>
    <span>${this.name}</span>
    </a>`;
    this.element.innerHTML = html;
  }
}

export default PokemonCard;
