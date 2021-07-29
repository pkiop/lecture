import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import reducer from './reducers';
import { Provider } from 'react-redux';

const initialState = {
  attendance: [
    {
      id: 'aaa',
      name: '김모모',
      number: 20181111,
      isAttendance: true,
    },
    {
      id: 'bbb',
      name: '최모모',
      number: 20182222,
      isAttendance: false,
    },
    {
      id: 'ccc',
      name: '남모모',
      number: 20183333,
      isAttendance: false,
    },
    {
      id: 'ddd',
      name: '강모모',
      number: 20184444,
      isAttendance: true,
    },
  ],
};

const store = configureStore(reducer, initialState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
