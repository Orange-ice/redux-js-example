import React from "react";
import {connect} from "react-redux";
import {SET_UNIT} from "../store/action/unit.js";
import PropTypes from "prop-types";

const Unit = ({changeUnit}) => {

    return (
        <div>
            <button onClick={() => {changeUnit('m')}}>m</button>
            <button onClick={() => {changeUnit('cm')}}>cm</button>
            <button onClick={() => {changeUnit('mm')}}>mm</button>
        </div>
    )
}

Unit.propTypes = {
    changeUnit: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeUnit: (unit) => dispatch(SET_UNIT(unit))
    }
}

export default connect(null, mapDispatchToProps)(Unit)
