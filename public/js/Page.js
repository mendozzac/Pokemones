import Component from "./Component.js";

class Page extends Component {
  constructor(parentElement) {
    super(parentElement, "app", "div");

    this.generateHTML();
  }
  generateHTML() {
    const html = ` <header class="header">
      <img
        class="logo"
        src="./img/TituloUniversoPokémon.png"
        alt="logo-pokemon"
      />
      <nav class="main-menu">
        <ul class="main-menu__container">
          <li class="main-menu__element"><a>Inicio</a></li>
          <li class="main-menu__element"><a>Pokédex</a></li>
          <li class="main-menu__element"><a>Características</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="main-box"></div>
    </main>`;
    this.element.innerHTML = html;
  }
}

export default Page;
