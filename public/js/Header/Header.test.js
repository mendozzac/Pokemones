import Header from "./Header.js";

describe("Given a Header class", () => {
  describe("When it receives a header tag", () => {
    test("Then it should render html inside the header", () => {
      const container = document.createElement("header");

      // eslint-disable-next-line no-unused-vars
      const component = new Header(container);
      const box = container.querySelector("header");

      expect(box).not.toBeNull();
    });
  });
});
