import React from "react";
import renderer from "react-test-renderer";
import List from "../components/List";

it("renders correctly", () => {
  const tree = renderer.create(<List></List>).toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders correctly one item", () => {
  const tree = renderer
    .create(
      <List
        id={"some random id"}
        firstName={"sudhir"}
        lastName={"kumar"}
        created={"any date"}
        orders={3}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
