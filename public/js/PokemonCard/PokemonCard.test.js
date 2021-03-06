import PokemonCard from "./PokemonCard.js";

describe("Given a PokemonCard class", () => {
  describe("When receives a div container, an url, an image and a name", () => {
    test("Then it should render a card inside the div container", () => {
      const container = document.createElement("div");
      const image = "pepe";
      const name = "luis";
      const url = "";

      // eslint-disable-next-line no-unused-vars
      const component = new PokemonCard(container, url, image, name);
      const card = container.querySelector("div");

      expect(card).not.toBeNull();
    });
  });
});
