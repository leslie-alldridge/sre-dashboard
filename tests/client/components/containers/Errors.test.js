import React from "react";
import { shallow } from "enzyme";
import Errors from "../../../../src/containers/Charts/Errors";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Errors debug />);

    expect(component).toMatchSnapshot();
  });
});
