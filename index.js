import store from "./store";
import {ADD_NUMBER, SUB_NUMBER} from './store/action/number.js'
import {SET_UNIT} from "./store/action/unit.js";

function updateNumber() {
    const {number, unit} = store.getState()
    document.querySelector('#number').innerHTML = `${number} ${unit}`
}


updateNumber()


// 通过 dispatch 分发 action
function add() {
    store.dispatch(ADD_NUMBER)
}

function subtract() {
    store.dispatch(SUB_NUMBER)
}

function changeUnit(unit){
    store.dispatch(SET_UNIT(unit))
}

// subscribe 注册监听器，当state变化时，会执行传入的函数
store.subscribe(updateNumber)

document.querySelector('#add').addEventListener('click', add)
document.querySelector('#sub').addEventListener('click', subtract)

// 给按钮绑定事件
document.querySelector('#m').addEventListener('click',()=>{changeUnit('m')})
document.querySelector('#cm').addEventListener('click',()=>{changeUnit('cm')})
document.querySelector('#mm').addEventListener('click',()=>{changeUnit('mm')})

