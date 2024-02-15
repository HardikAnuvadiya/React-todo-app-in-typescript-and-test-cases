import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';
import configureMockStore from 'redux-mock-store';

test('renders learn react link', () => {
  let mockStore: any;

  beforeEach(() => {
    mockStore = configureMockStore()(store);
  });
  render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
});
