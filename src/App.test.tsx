import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Writing tests for your components
// Using BEM to write scalable, reusable CSS
// Keeping your components small and refactoring them into sub-components where necessary
// Using hooks to store state, make API calls, and pass data down to sub-components through contexts

// Four possible crimes in Fakelandia:
//
// Mild Public Rudeness
// Speaking in a Lift
// Not Eating Your Vegetables
// Supporting Manchester United

