export const SLIDE_SELECTED = 'SLIDE_SELECTED';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const slideSelected = (payload) => ({
  type: SLIDE_SELECTED,
  payload
});

export const openModal = (payload) => ({
  type: OPEN_MODAL,
  payload
});

export const closeModal = (payload) => ({
  type: CLOSE_MODAL,
  payload
});
