import Component from "./Component";

describe("Given a component class", () => {
  describe("When it receives a div container, a 'test' class and a 'ul' tag", () => {
    test("Then it should render a ul element with a 'test' class inside the div container", () => {
      const container = document.createElement("div");
      const className = "test";
      const tag = "ul";

      // eslint-disable-next-line no-unused-vars
      const component = new Component(container, className, tag);
      const componentFound = container.querySelector("ul.test");

      expect(componentFound).not.toBeNull();
    });
  });
});
