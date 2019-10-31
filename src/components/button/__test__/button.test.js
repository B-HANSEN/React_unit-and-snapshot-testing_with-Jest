import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

// multiple renderings, both button tests render same time, adding to DOM tree
// TODO: after each test, cleanup residue after, to enable multiple kinds of tests
afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
});

it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="click me please" />)
    expect(getByTestId('button')).toHaveTextContent('click me please')
});

it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="save" />)
    expect(getByTestId('button')).toHaveTextContent('save')
});

