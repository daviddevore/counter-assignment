import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toBeInTheDocument();

  await userEvent.click(screen.getByText('+'));
  const newCount = screen.getByTestId("count");
  expect(newCount).toBeInTheDocument();
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toBeInTheDocument();

  await userEvent.click(screen.getByText('-'));
  const newCount = screen.getByTestId("count");
  expect(newCount).toBeInTheDocument();
});
