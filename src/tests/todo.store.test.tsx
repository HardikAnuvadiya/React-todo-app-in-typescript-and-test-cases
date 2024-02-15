import store from '../store';
import {
  addTodo,
  clearTodo,
  deleteTodo,
  updateTodo,
} from '../store/todo/action';

describe('Redux Store', () => {
  beforeEach(() => {
    store.dispatch(clearTodo());
  });
  test('initial state', async () => {
    const initialState: any = store.getState();
    expect(initialState).toEqual({
      todoState: { arrTodo: [] },
      userState: {
        user: { password: '', token: false, username: '' },
      },
      _persist: {
        rehydrated: true,
        version: -1,
      },
    });
    expect(initialState.todoState.arrTodo).toHaveLength(0);
  });

  test('dispatching action', async () => {
    // Add Todo
    store.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const state: any = store.getState();

    expect(state.todoState.arrTodo).toEqual([
      {
        id: 101215,
        todo: 'test todo',
      },
    ]); // Assuming increment increases the counter by 1
    expect(state.todoState.arrTodo).toHaveLength(1);
  });

  test('Update Todo', async () => {
    // Update Todo
    store.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const beforeState: any = store.getState();
    expect(beforeState.todoState.arrTodo).toHaveLength(1);

    store.dispatch(updateTodo({ id: 101215, todo: 'updated test todo' }));
    const state: any = store.getState();

    expect(state.todoState.arrTodo).toEqual([
      { id: 101215, todo: 'updated test todo' },
    ]); // Assuming increment increases the counter by 1
    expect(state.todoState.arrTodo).toHaveLength(1);
  });

  test('Delete Todo', async () => {
    // Delete Todo
    store.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const beforeState: any = store.getState();
    expect(beforeState.todoState.arrTodo).toHaveLength(1);

    store.dispatch(deleteTodo({ id: 101215, todo: 'test todo' }));
    const state: any = store.getState();
    expect(state.todoState.arrTodo).toHaveLength(0);
  });
});
