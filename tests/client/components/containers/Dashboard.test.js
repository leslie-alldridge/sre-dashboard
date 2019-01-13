import React from "react";
import { shallow, configure  } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

import Dashboard from "../../../../src/containers/Dashboard";
configure({ adapter: new Adapter() })

describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Dashboard debug />);

    expect(component).toMatchSnapshot();
  });
  it('state should be empty by default', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.state('latencyData')).toBe(undefined);
    expect(wrapper.state('trafficData')).toBe(undefined);
    expect(wrapper.state('errorData')).toBe(undefined);
    expect(wrapper.state('saturationData')).toBe(undefined);
  });
});
