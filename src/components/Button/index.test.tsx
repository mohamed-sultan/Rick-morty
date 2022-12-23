import * as React from "react";
import TestRenderer from "react-test-renderer";
import Button from "./index";

describe("Button snapshot testing", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
