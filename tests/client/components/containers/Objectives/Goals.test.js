import React from "react";
import { shallow } from "enzyme";
import Goals from "../../../../../src/containers/Objectives/Goals";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Goals debug />);

    expect(component).toMatchSnapshot();
  });
});
