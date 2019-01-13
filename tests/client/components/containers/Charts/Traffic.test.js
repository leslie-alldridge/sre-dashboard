import React from "react";
import { shallow } from "enzyme";
import Traffic from "../../../../../src/containers/Charts/Traffic";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Traffic debug />);

    expect(component).toMatchSnapshot();
  });
});
