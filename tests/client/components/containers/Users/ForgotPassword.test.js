import React from "react";
import { shallow } from "enzyme";
import ForgotPassword from "../../../../../src/containers/Users/ForgotPassword";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ForgotPassword debug />);

    expect(component).toMatchSnapshot();
  });
});
