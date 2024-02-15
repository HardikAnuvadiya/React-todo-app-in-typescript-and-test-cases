import { deleteTodo } from "../../store/todo/action";
import { todoDataType } from "./types";
import { useDispatch } from "react-redux";

export const Listing = ({ arrTodo, setInputValue, setVisible }: any) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>List of Todos</h2>
      <div>
        {arrTodo?.length > 0 &&
          arrTodo?.map((item: todoDataType, index: number) => {
            return (
              <div key={item?.id}>
                <div>{item?.todo}</div>
                <button
                  onClick={() => {
                    setVisible(true);
                    setInputValue({ id: item.id, todo: item.todo });
                  }}
                  data-testid={`edit-btn-${item.todo}`}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteTodo(item));
                  }}
                  data-testid={`delete-btn-${item.todo}`}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
