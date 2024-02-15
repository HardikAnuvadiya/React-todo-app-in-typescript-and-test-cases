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
        data-testid="Add-diloage"
      >
        Add
      </button>
      <br />
      <Dialog
        header="Add TODO"
        closable={false}
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
            data-testid="update-btn"
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
            data-testid="todo-add-button"
          >
            Add TODO
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
