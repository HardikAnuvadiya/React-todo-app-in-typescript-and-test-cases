import configureMockStore from 'redux-mock-store';
import store from '../store';
import { addTodo, deleteTodo, updateTodo } from '../store/todo/action';

describe('Redux Store', () => {
  let mockStore: any;

  beforeEach(() => {
    mockStore = configureMockStore()(store);
  });

  test('initial state', async () => {
    const initialState = await mockStore.getState();
    expect(initialState).toEqual({
      todoState: { arrTodo: [] },
      userState: {
        user: { password: '', token: '', username: '' },
      },
    });
    expect(initialState.todoState.arrTodo).toHaveLength(0);
  });

  test('dispatching action', async () => {
    // Add Todo
    await mockStore.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const state = await mockStore.getState();
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
    await mockStore.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const beforeState = await mockStore.getState();
    expect(beforeState.todoState.arrTodo).toHaveLength(1);
    await mockStore.dispatch(
      updateTodo({ id: 101215, todo: 'updated test todo' })
    );
    const state = await mockStore.getState();
    expect(state.todoState.arrTodo).toEqual([
      { id: 101215, todo: 'updated test todo' },
    ]); // Assuming increment increases the counter by 1
    expect(state.todoState.arrTodo).toHaveLength(1);
  });

  test('Delete Todo', async () => {
    // Delete Todo
    await mockStore.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const beforeState = await mockStore.getState();
    expect(beforeState.todoState.arrTodo).toHaveLength(1);
    await mockStore.dispatch(deleteTodo({ id: 101215, todo: 'test todo' }));
    const state = await mockStore.getState();
    expect(state.todoState.arrTodo).toHaveLength(0);
  });
});
