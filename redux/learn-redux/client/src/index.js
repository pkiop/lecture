import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import reducer from './reducers';
import { Provider } from 'react-redux';

const store = configureStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
