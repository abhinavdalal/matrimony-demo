import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './components/auth/authReducer';
import CarouselReducer from './components/Carousel/CarouselReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  carousel: CarouselReducer,
  form: formReducer
});

export default createStore(rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
