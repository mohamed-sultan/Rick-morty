import * as React from "react";
import TestRenderer from "react-test-renderer";
import Header from "./index";
import { saveAppearance } from "../../utils";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import ConfigureStore from "redux-mock-store";
describe("Header snapshot testing", () => {
  jest.spyOn(Object.getPrototypeOf(localStorage), "getItem");
  jest.spyOn(Object.getPrototypeOf(localStorage), "setItem");
  const mockStore = ConfigureStore([]);
  const store = mockStore({ ...{ dark: { dark: true } } });
  const Component = () => (
    <Provider store={store}>
      <Header />
    </Provider>
  );
  it("renders correctly", () => {
    const tree = TestRenderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("click the icon button should call the localstorage", () => {
    const { getByLabelText } = render(<Component />);
    const buttonIcon = getByLabelText("dark-light-icon");
    expect(buttonIcon).toBeInTheDocument();
    fireEvent.click(buttonIcon);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
