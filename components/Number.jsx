import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {ADD_NUMBER, SUB_NUMBER} from "../store/action/number.js";

const Number = ({add, number, unit, sub}) => {
    return (
        <div>
            <button onClick={add}>+</button>
            <span>{number} {unit}</span>
            <button onClick={sub}>-</button>
        </div>
    )
}


Number.propType = {
    add: PropTypes.func.isRequired,
    sub: PropTypes.func.isRequired,
    // number unit 将从 store 的 state 中注入
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
}


const mapStateToProps = (state) => {
    return {
        number: state.number,
        unit: state.unit
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => {
            dispatch(ADD_NUMBER)
        },
        sub: () => {
            dispatch(SUB_NUMBER)
        }
    }
}

// 使用 connect 把 store 中的 state 和 dispatch 映射到组件的 props 中， 组件可通过 props 调用
export default connect(mapStateToProps, mapDispatchToProps)(Number)
