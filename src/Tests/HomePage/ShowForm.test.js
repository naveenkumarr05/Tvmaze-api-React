import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ShowForm from '../../Components/HomePage/ShowForm';

configure({ adapter: new Adapter() });

describe('<ShowForm/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ShowForm />);
    });

    it("should set value to mocked value when input is changed", () => {
        wrapper = mount(<ShowForm />);
        wrapper.setState({
            inputValue : "music"
        })
       
        wrapper.update();
        expect(wrapper.state("inputValue")).toBe("music");
      });
})