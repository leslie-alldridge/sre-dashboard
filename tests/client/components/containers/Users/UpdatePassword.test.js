import React from "react";
import { shallow } from "enzyme";
import UpdatePassword from "../../../../../src/containers/Users/UpdatePassword";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<UpdatePassword debug />);

    expect(component).toMatchSnapshot();
  });
});
