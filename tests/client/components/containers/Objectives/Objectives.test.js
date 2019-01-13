import React from "react";
import { shallow } from "enzyme";
import Objectives from "../../../../../src/containers/Objectives/Objectives";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Objectives debug />);

    expect(component).toMatchSnapshot();
  });
});
