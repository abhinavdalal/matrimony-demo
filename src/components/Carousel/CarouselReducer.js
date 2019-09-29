import {
  SLIDE_SELECTED,
} from './CarouselActions';

const defaultState = {
  length: 0,
  history: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SLIDE_SELECTED:
      if (action.payload.length) {
        return {
          length: action.payload.length,
          history: [ ...state.history, action.payload.length ]
        };
      }
      return {
        length: 0,
        history: state.history
      };
    default:
      return state;
  }
}