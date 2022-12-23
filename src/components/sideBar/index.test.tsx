import * as React from "react";
import TestRenderer from "react-test-renderer";
import SideBar from "./index";

describe("SideBar snapshot testing", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<SideBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
