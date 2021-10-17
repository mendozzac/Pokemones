class Component {
  element;
  parentElement;

  constructor(parentElement, className, htmlTag = "div") {
    this.parentElement = parentElement;
    this.element = document.createElement(htmlTag);
    this.element.className = className;

    this.parentElement.append(this.element);
  }
}

export default Component;
