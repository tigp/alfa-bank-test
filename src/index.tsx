import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/index';
import App from './components/App';
import './styles/index.css';

const runApp = () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

runApp();
