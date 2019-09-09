import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Controls from './Dashboard.js';

describe('<Controls />', () => {
  it('renders without crashing', () => {
    render(<Controls />);
  });
  it('strike', () => {
    let clicked = false;
    const { getByText } = render(<Controls strike={() => clicked = true} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true);
  });
});
