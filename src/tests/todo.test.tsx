import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import { Todo } from '../Todo/Todo';

describe('Todo component', () => {
  test('should render initial todo value', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    const countElement = screen.getByTestId('todo');
    expect(countElement.textContent).toBe(``);
  });

  test('should increment count when increment button is clicked', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    const inputElement = screen.getByTestId('todo');
    fireEvent.change(inputElement, { target: { value: 'Testing Todo' } });

    const incrementButton = screen.getByText('Add Todo');
    fireEvent.click(incrementButton);
    expect(screen.getByText('Testing Todo')).toBeInTheDocument();
  });

  test('should decrement count when decrement button is clicked', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    const inputElement = screen.getByTestId('todo');
    fireEvent.change(inputElement, { target: { value: 'Testing Todo' } });

    const incrementButton = screen.getByText('Add Todo');
    fireEvent.click(incrementButton);

    const deleteButton = screen.getByTestId('Delete');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Testing Todo')).not.toBeInTheDocument();
  });
});
