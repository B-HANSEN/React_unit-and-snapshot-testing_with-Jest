import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

// for snapshot testing:
import renderer from 'react-test-renderer'

// multiple renderings, both button tests render same time, adding to DOM tree
// TODO: after each test, cleanup residue after, to enable multiple kinds of tests
afterEach(cleanup);

// ==================== unit testing ==================== //
it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div)
});

it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="click me please" />)
    expect(getByTestId('button')).toHaveTextContent('click me please')
});

it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="save" />)
    expect(getByTestId('button')).toHaveTextContent('save')
});



// ==================== snapshot testing ==================== //
it('snapshot', () => {
    const tree = renderer.create(<Button label="save" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('snapshot', () => {
    const tree = renderer.create(<Button label="click me please" />).toJSON();
    expect(tree).toMatchSnapshot();
});