import Component from "../Component/Component.js";

class Page extends Component {
  constructor(parentElement) {
    super(parentElement, "app", "div");

    this.generateHTML();
  }
  generateHTML() {
    const html = ` 
    <main>
      <div class="main-box"></div>
    </main>`;
    this.element.innerHTML = html;
  }
}

export default Page;
