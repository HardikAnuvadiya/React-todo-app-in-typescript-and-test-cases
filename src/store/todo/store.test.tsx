import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '..';
import { thunk } from 'redux-thunk';
import { addTodo, deleteTodo, updateTodo } from './action';
import loggingMiddleware from '../../middleware/loggingMiddleware';

describe('Redux Store', () => {
  let mockStore: any;

  beforeEach(() => {
    mockStore = createStore(
      rootReducer,
      applyMiddleware(thunk, loggingMiddleware)
    );
  });

  test('initial state', async () => {
    const initialState = await mockStore.getState();
    expect(initialState).toEqual({
      todoState: { arrTodo: [] },
    });
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
  });
  test('Update Todo', async () => {
    // Update Todo
    await mockStore.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    await mockStore.dispatch(updateTodo({ id: 101215, todo: 'updated test todo' }));
    const state = await mockStore.getState();
    expect(state.todoState.arrTodo).toEqual([
      { id: 101215, todo: 'updated test todo' },
    ]); // Assuming increment increases the counter by 1
  });

  test('Delete Todo', async () => {
    // Dete Todo
    await mockStore.dispatch(
      deleteTodo({ id: new Date().getTime(), todo: 'test todo' })
    );
    const state = await mockStore.getState();
    expect(state.todoState.arrTodo).toEqual([]); // Assuming increment increases the counter by 1
  });
});
