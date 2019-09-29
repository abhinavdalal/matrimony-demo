import React from 'react';
import convertor from 'number-to-words';
import _capitalize from 'lodash/capitalize';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';

// import options from '../../constants/options'; // deprecated for building via config
import config from '../../config/config.json';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/Button/Button';
import { slideSelected, openModal, closeModal } from '../../components/Carousel/CarouselActions';
import './CarouselScreen.css'

Modal.setAppElement('#root');

const optionsNumberArray = Array.from({length: config.numberOfOptions}, (_, i) => i + 1);

const options = optionsNumberArray.map(
  i => ({
    numeric: i,
    spelled: _capitalize(convertor.toWords(i))
  })
);

const CarouselScreen = (props) => {
  const {
    isAuthenticated,
    dispatchSlideSelected,
    carouselLength,
    modalIsOpen,
    history,
    dispatchOpenModal,
    dispatchCloseModal
  } = props;

  // const filteredOptions = options;
  const filteredOptions = options.slice(0, carouselLength);

  return !isAuthenticated ? <Redirect to="/" /> :
  (<div className="CarouselScreen">
    <div className="CarouselScreen_Dropdown">
      <label className="CarouselScreen_Label">Select slides</label>
      <select
        className="CarouselScreen_Select"
        value={ carouselLength }
        onChange={(e) => dispatchSlideSelected({length: e.target.value})}
      >
        <option key="0" />
        { options.map(n => <option key={n.numeric}>{n.numeric}</option>) }
      </select>
    </div>
    <Carousel key={carouselLength} filteredOptions={filteredOptions}/>
    <Button onClick={ dispatchOpenModal }>Finish</Button>
    <Modal
      isOpen={ modalIsOpen }
      onRequestClose={ dispatchCloseModal }
      contentLabel="History Modal"
      style={{ overlay: { zIndex: '1001' }, content: { margin: 'auto', textAlign: 'center'} }}
      shouldCloseOnEsc
    >
      <div style={{ margin: 'auto' }}>
        <span><h3 style={{ display: 'inline-block'}}>History Modal</h3></span>
        <span><Button onClick={ dispatchCloseModal }>Close Modal</Button></span>
      </div>
      <ul>
        { history.map((h, i) => <li key={ i }>{ h }</li>) }
      </ul>
    </Modal>
  </div>);
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  carouselLength: state.carousel.length,
  modalIsOpen: state.modalIsOpen,
  history: state.carousel.history
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSlideSelected: (payload) => dispatch(slideSelected(payload)),
  dispatchOpenModal: (payload) => dispatch(openModal(payload)),
  dispatchCloseModal: (payload) => dispatch(closeModal(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselScreen)