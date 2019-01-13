import React from "react";
import { shallow } from "enzyme";
import UpdateProfile from "../../../../../src/containers/Users/UpdateProfile";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<UpdateProfile match={{"params": {"username": 'leslie'}}}debug />);

    expect(component).toMatchSnapshot();
  });
});
