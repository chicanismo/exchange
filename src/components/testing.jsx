// NOTE: I've made this into a container
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pullString } from '../selectors/testing.selector';
import { callAction } from '../actions/test.action';

const Testing = ({ word, pushWord }) => (
  <div>
    <button
      onClick={() => { pushWord('sup with it !!!'); }}
    >Click Me</button>
    <h3>{word}</h3>
  </div>
  );

const mapState = state => ({
  word: pullString(state),
});

const mapDispatch = dispatch => ({
  pushWord: str => dispatch(callAction(str)),
});

Testing.propTypes = {
  word: PropTypes.string,
  pushWord: PropTypes.func.isRequired,
};

Testing.defaultProtypes = {
  word: 'something is comming',
};

export default connect(mapState, mapDispatch)(Testing);
