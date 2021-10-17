import Page from "./Page.js";

describe("Given a Page class", () => {
  describe("When it receives a div container", () => {
    test("Then it should render html inside the div container", () => {
      const container = document.createElement("div");

      // eslint-disable-next-line no-unused-vars
      const component = new Page(container);
      const box = container.querySelector("div");

      expect(box).not.toBeNull();
    });
  });
});
