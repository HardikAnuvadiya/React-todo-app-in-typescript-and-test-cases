import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { rootReducer } from '../store';
import { Todo } from '../Todo/Todo';
import { createStore } from 'redux';

describe('Todo component', () => {
  let store: any;
  beforeEach(() => {
    // Reset the Redux store before each test
    store = createStore(rootReducer);
  });

  test('should render initial todo value', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    const countElement = screen.getByTestId('todo-input');
    expect(countElement.textContent).toBe(``);
  });

  test('should increment count when increment button is clicked', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    const inputElement = screen.getByTestId('todo-input');
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
    const inputElement = screen.getByTestId('todo-input');
    fireEvent.change(inputElement, { target: { value: 'Testing Todo' } });

    const incrementButton = screen.getByText('Add Todo');
    fireEvent.click(incrementButton);

    const deleteButton = screen.getByTestId('delete-btn-0');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Testing Todo')).not.toBeInTheDocument();
  });
});
