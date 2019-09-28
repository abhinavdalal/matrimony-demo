import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './components/auth/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
});

export default createStore(rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
