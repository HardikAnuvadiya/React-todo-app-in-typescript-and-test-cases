import { render, fireEvent, screen } from '@testing-library/react';
import { Todo } from '../components/Todo/Todo'; // Adjust the import path according to your directory structure
import { Provider } from 'react-redux';
import { clearTodo } from '../store/todo/action';
import store from '../store';

describe('Todo component', () => {
  beforeEach(() => {
    store.dispatch(clearTodo());
  });
  test('should render initial todo value', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  });

  test("Add button opens the dialog and Add Todo", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("Add-diloage"));

    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "New todo item" } });
    fireEvent.click(screen.getByTestId("todo-add-button"));
    expect(screen.getByText("New todo item")).toBeInTheDocument();
  });

  test("should delete a todo when delete button is clicked", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("Add-diloage"));

    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "New todo item" } });
    fireEvent.click(screen.getByTestId("todo-add-button"));
    expect(screen.getByText("New todo item")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("delete-btn-New todo item"));

    expect(screen.queryByText("New Todo Item")).toBeNull();

    expect(screen.queryByText("New Todo Item")).not.toBeInTheDocument();
  });

  test("should Update a todo when edit button is clicked", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("Add-diloage"));

    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "New todo item" } });

    fireEvent.click(screen.getByTestId("todo-add-button"));

    expect(screen.getByText("New todo item")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("edit-btn-New todo item"));
    fireEvent.change(input, { target: { value: "updated todo item" } });
    fireEvent.click(screen.getByTestId("update-btn"));

    expect(screen.getByText("updated todo item")).toBeInTheDocument();
  });
});
