import TestRenderer from "react-test-renderer";
import Card from "./index";

describe("Card snapshot testing", () => {
  it("renders correctly", () => {
    const MockedCharacter = {
      image: "/hdflix.png",
      name: "string",
      status: "string",
      species: "string",
      location: {
        name: "string",
      },
    };
    const tree = TestRenderer.create(
      <Card character={MockedCharacter} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
