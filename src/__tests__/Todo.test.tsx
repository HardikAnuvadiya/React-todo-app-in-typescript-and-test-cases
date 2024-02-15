import { render, fireEvent, screen } from '@testing-library/react';
import { Todo } from '../components/Todo/Todo'; // Adjust the import path according to your directory structure
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import store from '../store';

describe('Todo component', () => {
  let mockStore: any;

  beforeEach(() => {
    mockStore = configureMockStore()(store);
  });

  test('should render initial todo value', () => {
    render(
      <Provider store={mockStore}>
        <Todo />
      </Provider>
    );
    const countElement = screen.getByTestId('todo-input');
    expect(countElement.textContent).toBe(``);
  });

  test('should add a todo when Add Todo button is clicked and after add todo clear the input filed', () => {
    render(
      <Provider store={mockStore}>
        <Todo />
      </Provider>
    );
    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(inputElement, {
      target: { value: 'New Todo Item' },
    });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('New Todo Item');
    expect(todoItem).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
  });

  test('should delete a todo when delete button is clicked', () => {
    render(
      <Provider store={mockStore}>
        <Todo />
      </Provider>
    );

    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByTestId('add-todo-button');

    fireEvent.change(inputElement, {
      target: { id: 123456, value: 'New Todo Item' },
    });
    fireEvent.click(addButton);

    const deleteButton = screen.getByTestId('delete-btn-New Todo Item');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('New Todo Item')).toBeNull();

    const deletedTodo = screen.queryByText('New Todo Item');
    expect(deletedTodo).not.toBeInTheDocument();
    expect(inputElement).toHaveValue('');
  });
});