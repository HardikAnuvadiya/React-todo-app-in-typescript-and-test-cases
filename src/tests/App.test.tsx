import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import App from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Todo } from "../components/Todo/Todo";
import { HomePage } from "../components/HomePage/HomePage";
import { Login } from "../components/Login/Login";
const consoleError = console.error; // Save a reference to the original console.error function

beforeEach(() => {
  console.error = jest.fn(); // Replace console.error with a mock function
});

afterEach(() => {
  console.error = consoleError; // Restore the original console.error function
});

describe("TodoApp", () => {
  test("renders App", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("log in test.", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("login")).toBeInTheDocument();
    const input = screen.getByTestId("username");
    fireEvent.change(input, {
      target: { value: "hardik.anuvadiya@gtcsys.com" }
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "123" }
    });
    fireEvent.click(screen.getByTestId("Log-in"));
    expect(screen.getByTestId("Log-out")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("Log-out"));
    expect(screen.getByTestId("Log-in")).toBeInTheDocument();
  });

  test("log in with error test.", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("login")).toBeInTheDocument();
    const input = screen.getByTestId("username");

    fireEvent.change(input, {
      target: { value: "" }
    });

    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "Please enter both username and password." }
    });
    fireEvent.click(screen.getByTestId("Log-in"));
    expect(screen.getByText("Please enter username.")).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: "hardik.anuvadiya@gtcsys.com" }
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "" }
    });
    fireEvent.click(screen.getByTestId("Log-in"));
    expect(screen.getByText("Please enter password.")).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: "" }
    });

    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "123" }
    });
    fireEvent.click(screen.getByTestId("Log-in"));
    expect(screen.getByText("Please enter username.")).toBeInTheDocument();
  });

  test("renders TODO component for '/' route", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Todo />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("Add-diloage")).toBeInTheDocument();
  });
});
