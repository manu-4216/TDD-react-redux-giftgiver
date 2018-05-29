import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('initializes the state with an empty array', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a gift to the state when clicking add button', () => {
    app.find('.btn-add').simulate('click');

    expect(app.state().gifts).toEqual([{ id: 1 }]);
});
