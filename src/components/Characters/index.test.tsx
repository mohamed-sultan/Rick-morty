import TestRenderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Characters from "./index";
import mediaQuery from "css-mediaquery";

import { Provider } from "react-redux";
import ConfigureStore from "redux-mock-store";

function createMatchMedia(width: number) {
  return (query: string) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addListener: () => {},
    removeListener: () => {},
  });
}

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
describe("Characters snapshot testing", () => {
  const mockStore = ConfigureStore([]);
  const store = mockStore({ ...{ dark: { dark: true } } });
  const data = [
    {
      name: "name",
      image: "/hdflix.png",
      status: "",
      species: "",
      location: { name: "" },
    },
  ];
  const Component = ({ result = [] }) => (
    <Provider store={store}>
      <Characters
        characters={{
          results: result,
        }}
      />
    </Provider>
  );
  it("renders correctly", () => {
    const tree = TestRenderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with data", () => {
    const tree = TestRenderer.create(<Component result={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("show some flex style for large devices", async () => {
    window.matchMedia = createMatchMedia(1000000);
    const { getByTestId } = render(<Component result={data} />);
    const isVisible = getByTestId("element");
    expect(isVisible).toHaveStyle(`display: flex`);
  });
  it("show some flex style for small devices", async () => {
    window.matchMedia = createMatchMedia(1);
    const { getByTestId } = render(<Component result={data} />);
    const isVisible = getByTestId("element");
    expect(isVisible).not.toHaveStyle(`display: flex`);
  });
});
