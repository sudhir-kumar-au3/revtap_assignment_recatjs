import React from "react";
import renderer from "react-test-renderer";
import Customer from "../components/Customer";

it("renders customer component correctly", () => {
  const tree = renderer.create(<Customer></Customer>).toJSON();
  expect(tree).toMatchSnapshot();
});