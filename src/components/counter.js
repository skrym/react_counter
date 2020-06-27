import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, clicks, inc, dec, rnd }) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={dec}>DEC</button>
      <button onClick={inc}>INC</button>
      <button onClick={rnd}>RND</button>
      <h6>{clicks}</h6>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {

  const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

  return {
    inc,
    dec,
    rnd: () => {
      const value = -5 + Math.floor(Math.random()*10)
      rnd(value)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

