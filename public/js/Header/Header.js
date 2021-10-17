import Component from "../Component/Component.js";

class Header extends Component {
  constructor(parentElement) {
    super(parentElement, "header", "header");
    this.generateHTML();
  }
  generateHTML() {
    const html = `
      <img
        class="logo"
        src="./img/TituloUniversoPokémon.png"
        alt="logo-pokemon"
      />
      <nav class="main-menu">
        <ul class="main-menu__container">
          <li class="main-menu__element">
            <a>Inicio</a>
          </li>
          <li class="main-menu__element">
            <a>Pokédex</a>
          </li>
          <li class="main-menu__element">
            <a>Características</a>
          </li>
        </ul>
      </nav>
    `;
    this.element.innerHTML = html;
  }
}

export default Header;
