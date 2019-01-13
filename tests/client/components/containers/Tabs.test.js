import React from "react";
import { shallow } from "enzyme";
import Tabs from "../../../../src/containers/Tabs";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Tabs debug />);

    expect(component).toMatchSnapshot();
  });
});
