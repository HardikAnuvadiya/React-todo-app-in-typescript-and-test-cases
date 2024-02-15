import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import store, { rootReducer } from "../../store";
import loggingMiddleware from "../../middleware/loggingMiddleware";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Todo } from "./Todo";
const consoleError = console.error; // Save a reference to the original console.error function

beforeEach(() => {
  console.error = jest.fn(); // Replace console.error with a mock function
});

afterEach(() => {
  console.error = consoleError; // Restore the original console.error function
});

describe("Todo component", () => {
  let mockStore: any;

  beforeEach(() => {
    mockStore = createStore(
      rootReducer,
      applyMiddleware(thunk, loggingMiddleware)
    );
  });

  test("should render initial todo value", () => {
    render(
      <Provider store={mockStore}>
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
      <Provider store={mockStore}>
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
      <Provider store={mockStore}>
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
