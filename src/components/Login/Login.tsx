import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../store/user/action";
import { userDataType } from "./types";

export const Login = () => {
  const [value, setValue] = useState<userDataType>({
    username: "",
    password: "",
    token: false
  });
  const [error, setError] = useState<string>(""); // State for error message

  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function login() {
    if (value.username.trim() === "" || value.password.trim() === "") {
      if (value.username.trim() === "" && value.password.trim() !== "") {
        setError("Please enter username.");
      } else if (value.username.trim() !== "" && value.password.trim() === "") {
        setError("Please enter password.");
      } else if (value.username.trim() === "" && value.password.trim() === "") {
        setError("Please enter both username and password.");
      }
    } else {
      setError("");
      const result = dispatch(logIn(value));
      console.log("result", result);
      navigate("/");
      setValue({ ...value, username: "", password: "", token: false });
    }
  }

  return (
    <div data-testid="login">
      <title>Login</title>
      <label htmlFor="">Username: </label>
      <input
        type="text"
        // required
        data-testid="username"
        value={value.username}
        name="username"
        placeholder="test@gmail.com"
        onChange={(e: any) => {
          setError("");
          setValue({ ...value, username: e.target.value });
        }}
        onBlur={() => {
          if (value.username.trim() === "") {
            setError("Please enter username.");
          }
        }}
      />
      <br />
      <label htmlFor="">Password: </label>
      <input
        type="password"
        value={value.password}
        name="password"
        data-testid="password"
        placeholder="bs6567G23!!"
        onChange={(e: any) => {
          setError("");
          setValue({ ...value, password: e.target.value });
        }}
        onBlur={() => {
          if (value.username.trim() === "" && value.password.trim() !== "") {
            setError("Please enter username.");
          } else if (
            value.username.trim() !== "" &&
            value.password.trim() === ""
          ) {
            setError("Please enter password.");
          } else if (
            value.username.trim() === "" &&
            value.password.trim() === ""
          ) {
            setError("Please enter both username and password.");
          }
        }}
      />
      <br />
      <button onClick={login} data-testid="Log-in">
        Login
      </button>
      {error && (
        <p data-testid="error-message" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};
