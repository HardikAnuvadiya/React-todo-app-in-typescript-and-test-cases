import { testStore } from '../mocks/storage.mock';
import { addTodo, clearTodo, deleteTodo, updateTodo } from '../store/todo/action';

describe('Redux Store', () => {
  beforeEach(() => {
    testStore.dispatch(clearTodo());
  });
  test('initial state', async () => {
    const initialState: any = await testStore.getState();
    expect(initialState).toEqual({
      todoState: { arrTodo: [] },
      userState: {
        user: { password: '', token: false, username: '' },
      },
    });
    expect(initialState.todoState.arrTodo).toHaveLength(0);
  });

  test('dispatching action', async () => {
    // Add Todo
    await testStore.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const state = await testStore.getState();
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
    await testStore.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const beforeState = await testStore.getState();
    expect(beforeState.todoState.arrTodo).toHaveLength(1);
    await testStore.dispatch(
      updateTodo({ id: 101215, todo: 'updated test todo' })
    );
    const state = await testStore.getState();
    expect(state.todoState.arrTodo).toEqual([
      { id: 101215, todo: 'updated test todo' },
    ]); // Assuming increment increases the counter by 1
    expect(state.todoState.arrTodo).toHaveLength(1);
  });

  test('Delete Todo', async () => {
    // Delete Todo
    await testStore.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const beforeState = await testStore.getState();
    expect(beforeState.todoState.arrTodo).toHaveLength(1);
    await testStore.dispatch(deleteTodo({ id: 101215, todo: 'test todo' }));
    const state = await testStore.getState();
    expect(state.todoState.arrTodo).toHaveLength(0);
  });
});
