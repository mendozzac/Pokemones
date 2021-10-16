import Page from "./Page.js";

describe("Given a Page class", () => {
  describe("When it receives a div container", () => {
    test("Then it should put html inside the div container", () => {
      const container = document.createElement("div");

      const box = container.querySelector("div");
      const component = new Page(box);

      expect(component).not.toBeNull();
    });
  });
});
