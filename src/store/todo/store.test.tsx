import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '..';
import { thunk } from 'redux-thunk';
import { addTodo, deleteTodo, updateTodo } from './action';

describe('Redux Store', () => {
  let store: any;

  beforeEach(() => {
    store = createStore(rootReducer, applyMiddleware(thunk)); // Apply middleware
  });

  test('initial state', () => {
    const initialState = store.getState();
    expect(initialState).toEqual({
      arrTodo: [],
    });
  });

  test('dispatching action', async () => {
    // Add Todo
    await store.dispatch(addTodo({ id: 101215, todo: 'test todo' }));
    const state = store.getState();
    expect(state.todoState.arrTodo).toEqual([
      {
        id: 101215,
        todo: 'test todo',
      },
    ]); // Assuming increment increases the counter by 1
  });
  test('Update Todo', async () => {
    // Update Todo
    await store.dispatch(updateTodo({ id: 101215, todo: 'updated test todo' }));
    const state = store.getState();
    expect(state.todoState.arrTodo).toEqual([
      { id: 101215, todo: 'updated test todo' },
    ]); // Assuming increment increases the counter by 1
  });

  test('Delete Todo', async () => {
    // Dete Todo
    await store.dispatch(
      deleteTodo({ id: new Date().getTime(), todo: 'test todo' })
    );
    const state = store.getState();
    expect(state.todoState.arrTodo).toEqual([]); // Assuming increment increases the counter by 1
  });
});
