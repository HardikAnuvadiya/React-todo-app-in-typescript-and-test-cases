import { render, fireEvent, screen } from '@testing-library/react';
import { Todo } from './Todo'; // Adjust the import path according to your directory structure
import { Provider } from 'react-redux';
import { rootReducer } from '../store';
import { createStore } from 'redux';

describe('Todo component', () => {
  let store: any;
  beforeEach(() => {
    // Reset the Redux store before each test
    store = createStore(rootReducer);
  });

  test('should add a todo when Add Todo button is clicked', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );

    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(inputElement, {
      target: { id: 123456, value: 'New Todo Item' },
    });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('New Todo Item');
    expect(todoItem).toBeInTheDocument();
  });

  test('should clear input value after adding a todo', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );

    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(inputElement, {
      target: { id: 123456, value: 'New Todo Item' },
    });
    fireEvent.click(addButton);

    expect(inputElement).toHaveValue('');
  });

  test('should delete a todo when delete button is clicked', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );

    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByTestId('add-todo-button');

    fireEvent.change(inputElement, {
      target: { id: 123456, value: 'New Todo Item' },
    });
    fireEvent.click(addButton);

    const deleteButton = screen.getByTestId('delete-btn-0');
    fireEvent.click(deleteButton);

    const deletedTodo = screen.queryByText('New Todo Item');
    expect(deletedTodo).not.toBeInTheDocument();
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

    const incrementButton = screen.getByTestId('add-todo-button');
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
    fireEvent.change(inputElement, {
      target: { id: 123456, value: 'Testing Todo' },
    });

    const incrementButton = screen.getByTestId('add-todo-button');
    fireEvent.click(incrementButton);

    const deleteButton = screen.getByTestId('delete-btn-0');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Testing Todo')).not.toBeInTheDocument();
  });
});
