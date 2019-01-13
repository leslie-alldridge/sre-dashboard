import React from "react";
import { shallow } from "enzyme";
import Register from "../../../../../src/containers/Users/Register";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Register debug />);

    expect(component).toMatchSnapshot();
  });
});
