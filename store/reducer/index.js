import {combineReducers} from "redux";
import numberReducer from "./number.js";
import {unitReducer} from "./unit.js";

// combineReducer 用于合并 reducer，无论多少个类型的 reducer，都可以合并成一个然后再传入到 createStore 中
export default combineReducers({
    number: numberReducer,
    unit: unitReducer
});

