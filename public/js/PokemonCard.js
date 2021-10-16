import Component from "./Component.js";

class PokemonCard extends Component {
  image;
  name;

  constructor(parentElement, image, name) {
    super(parentElement, "card", "div");
    this.name = name;
    this.image = image;

    this.generateHTML();
  }
  generateHTML() {
    const html = `<a>
    <img src="${this.image}" alt="Foto de ${this.name}"/>
    <span>${this.name}</span>
    </a>`;
    this.element.innerHTML = html;
  }
}

export default PokemonCard;
