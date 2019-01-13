import React from "react";
import { shallow } from "enzyme";
import GoalsSelect from "../../../../../src/containers/Objectives/GoalsSelect";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<GoalsSelect debug />);

    expect(component).toMatchSnapshot();
  });
});
