import React from "react";
import { shallow } from "enzyme";
import Latency from "../../../../../src/containers/Charts/Latency";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Latency debug />);

    expect(component).toMatchSnapshot();
  });
});
