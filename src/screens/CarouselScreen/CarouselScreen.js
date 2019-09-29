import React from 'react';
import convertor from 'number-to-words';
import _capitalize from 'lodash/capitalize';
import { connect } from 'react-redux';
// import { Carousel } from 'react-multi-carousel';

// import options from '../../constants/options';
import config from '../../config/config.json';
import { slideSelected } from '../../components/Carousel/CarouselActions';
import './CarouselScreen.css'

const optionsNumberArray = Array.from({length: config.numberOfOptions}, (_, i) => i + 1);

const options = optionsNumberArray.map(
  i => ({
    numeric: i,
    spelled: _capitalize(convertor.toWords(i))
  })
);

const CarouselScreen = (props) => (
  <div className="CarouselScreen_Dropdown">
    <label className="CarouselScreen_Label">Select slides</label>
    <select
      className="CarouselScreen_Select"
      onChange={(e) => props.dispatchSlideSelected({length: e.target.value})}
    >
      <option key="0" />
      { options.map(n => <option key={n.numeric}>{n.numeric}</option>) }
    </select>
  </div>
);

const mapStateToProps = (state) => ({
  carouselLength: state.carousel.length,
  history: state.carousel.history
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSlideSelected: (payload) => dispatch(slideSelected(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselScreen)