import * as React from "react";
import TestRenderer from "react-test-renderer";
import Footer from "./index";
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
describe("Footer snapshot testing", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
