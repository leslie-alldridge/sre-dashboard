import React from "react";
import { shallow } from "enzyme";
import Home from "../../../src/containers/Home";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />);

    expect(component).toMatchSnapshot();
  });
});
