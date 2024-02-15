import { useState } from "react";
import { todoDataType } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { Listing } from "./Lsiting";
import { RootState } from "../../store";
import { addTodo, updateTodo } from "../../store/todo/action";
import { Dialog } from "primereact/dialog";

export const Todo = () => {
  const arrTodo = useSelector((state: RootState) => state.todoState.arrTodo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ id: 0, todo: "" });
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(true);
        }}
        data-testid="add-todo-button"
      >
        Add
      </button>
      <br />
      <Dialog
        header="Add TODO"
        visible={visible}
        style={{ width: "20vw" }}
        onHide={() => setVisible(false)}
      >
        <input
          data-testid="todo-input"
          type="text"
          className="todo-input"
          value={inputValue.todo}
          onChange={(e) => {
            setInputValue({ ...inputValue, todo: e.target.value });
          }}
        />
        {arrTodo.find((todo: todoDataType) => todo.id === inputValue.id) ? (
          <button
            onClick={() => {
              dispatch(updateTodo(inputValue));
              setVisible(false);
              setInputValue({ id: 0, todo: "" });
            }}
            data-testid={`update-btn-${inputValue.id}`}
          >
            Update
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(
                addTodo({
                  id: inputValue.id || new Date().getTime(),
                  todo: inputValue.todo
                })
              );
              setInputValue({ id: 0, todo: "" });
              setVisible(false);
            }}
            data-testid="add-todo-button"
          >
            Add
          </button>
        )}
      </Dialog>
      <Listing
        arrTodo={arrTodo}
        visible={visible}
        setVisible={setVisible}
        setInputValue={setInputValue}
      />
    </div>
  );
};
