import {legacy_createStore as createStore} from "redux";
// import reducer from "./reducer/number";
import reducer from "./reducer/index.js";


// createStore 创建 store ，第一个参数是reducer ，第二个参数是初始化的 state（可省略）
const store = createStore(reducer, {number: 0, unit: 'm'});

export default store;
