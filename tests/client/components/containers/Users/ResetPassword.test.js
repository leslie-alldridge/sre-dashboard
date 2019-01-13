import React from "react";
import { shallow } from "enzyme";
import ResetPassword from "../../../../../src/containers/Users/ResetPassword";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ResetPassword debug />);

    expect(component).toMatchSnapshot();
  });
});
