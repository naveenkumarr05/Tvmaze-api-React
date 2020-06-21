import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"; 
import HomePage from '../../Components/HomePage';
import showMockData from '../Fixtures/show-fixtures';

configure({ adapter: new Adapter() });

describe('<HomePage/>',() => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <HomePage />
        );
    });


})