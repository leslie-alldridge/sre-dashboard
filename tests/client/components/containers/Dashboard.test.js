import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../../../../src/containers/Dashboard";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Dashboard debug />);

    expect(component).toMatchSnapshot();
  });
});
