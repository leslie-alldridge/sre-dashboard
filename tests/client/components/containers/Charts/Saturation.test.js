import React from "react";
import { shallow } from "enzyme";
import Saturation from "../../../../../src/containers/Charts/Saturation";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Saturation debug />);

    expect(component).toMatchSnapshot();
  });
});
