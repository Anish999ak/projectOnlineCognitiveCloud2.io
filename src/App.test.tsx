// @ts-nocheck
import { render, screen, fireEvent, within, getByTestId } from '@testing-library/react';
import { useState } from 'react';
import App from './App';
import Quiz from './Components/Quiz';



test('check home component is rendered in app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Candidate Detail Form/);
  expect(linkElement).toBeInTheDocument();
});


test('when rendered button should be grey', () => {
  render(<App/>);
  const checkButton = screen.getByTestId("button");
  expect(checkButton).toHaveClass("grey")
});

