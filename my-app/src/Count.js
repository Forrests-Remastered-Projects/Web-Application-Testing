import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display.js';


describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });
  it('props work', () => {
    const balls = 3, strikes = 2;
    const display = render(<Display strikes={strikes} balls={balls} />);
    display.getByText(new RegExp(`Strikes: ${strikes}`, 'i'));
    display.getByText(new RegExp(`Balls: ${balls}`, 'i'));
  });
});