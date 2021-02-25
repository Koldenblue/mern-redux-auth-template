import { getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

test('renders', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'App')).toBeInTheDocument();
});

// learn more: https://github.com/testing-library/jest-dom