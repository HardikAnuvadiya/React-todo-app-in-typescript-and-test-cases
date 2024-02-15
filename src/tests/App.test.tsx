import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { testStore } from '../mocks/storage.mock';

test('renders learn react link', () => {

  render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
});
