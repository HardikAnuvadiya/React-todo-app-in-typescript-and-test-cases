import { RootState } from '../store';

const loggingMiddleware =
  (store: RootState) => (next: any) => (action: any) => {
    console.log('Action:', action); // Log the action
    const result = next(action); // Call the next middleware or the reducer
    console.log('State after action:', store.getState()); // Log the state after the action
    return result;
  };

export default loggingMiddleware;
