import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

export default function configureStore(reducer, initialState = {}) {
  return createStore(reducer, initialState, applyMiddleware(ReduxThunk));
}
