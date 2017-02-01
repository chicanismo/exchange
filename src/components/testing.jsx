//I've made this into a container
import React, { Component } from "react";
import { connect } from "react-redux";
import { pullString } from "../selectors/testing.selector";
import { callAction } from "../actions/test.action"

const Testing = ({word, pushWord, dispatch}) => {
  return (
    <div>
      <button
        onClick={() => {pushWord("sup with it")}}
        >Container</button>
      <h3>word</h3>
    </div>
  )
}

const mapState = (state) => ({
  word: pullString(state)
})

const mapDispatch = (dispatch) => ({
  pushWord: (str) => dispatch(callAction(str))
})

export default connect(mapState, mapDispatch)(Testing);
