import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './components/auth/authReducer';
import CarouselReducer from './components/Carousel/CarouselReducer';

import {
  OPEN_MODAL,
  CLOSE_MODAL
} from './components/Carousel/CarouselActions';

const modalIsOpenReducer = (state = false, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  carousel: CarouselReducer,
  form: formReducer,
  modalIsOpen: modalIsOpenReducer
});

export default createStore(rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
