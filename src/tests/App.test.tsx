import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import App from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Todo } from "../components/Todo/Todo";
const consoleError = console.error; // Save a reference to the original console.error function

beforeEach(() => {
  console.error = jest.fn(); // Replace console.error with a mock function
});

afterEach(() => {
  console.error = consoleError; // Restore the original console.error function
});

describe("TodoApp", () => {
  test("renders learn react link", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("renders TodoList component for '/' route", () => {
    // const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Todo />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    // fireEvent.click(screen.getByTestId("Add-diloage"));

    expect(screen.getByTestId("Add-diloage")).toBeInTheDocument();
    // const items = screen.getByTestId("list");
    // expect(items.children.length).toBe(3);
    // const signUpBtn = screen.getByTestId("text");
    // fireEvent.click(signUpBtn);
    // expect(history.location.pathname).toBe("/todo/:id");
  });
});
