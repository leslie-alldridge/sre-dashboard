import React from "react";
import { shallow } from "enzyme";
import Login from "../../../../../src/containers/Users/Login";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Login debug />);

    expect(component).toMatchSnapshot();
  });
});
