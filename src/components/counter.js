import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions'

const Counter = ({counter, inc, dec, def}) => {
    return (<div class='wrapper'>
        <div class='block'>
            <div class='counter'>
                <h1 id='counterText'>{counter}</h1>
            </div>
        </div>
        <button onClick={inc} class='btnPlus'></button>
        <button onClick={dec} class='btnMinus'></button>
        <button onClick={def} class='btnReset'></button>
    </div>)
}

const mapStateToProps = state => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);