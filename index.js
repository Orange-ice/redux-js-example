import store from "./store";
import {ADD_NUMBER,SUB_NUMBER} from './store/action/number.js'

function updateNumber(){
    document.querySelector('#number').innerHTML = store.getState();
}


updateNumber()


// 通过 dispatch 分发 action
function add() {
    store.dispatch(ADD_NUMBER)
}

function subtract() {
    store.dispatch(SUB_NUMBER)
}
// subscribe 注册监听器，当state变化时，会执行传入的函数
store.subscribe(updateNumber)

document.querySelector('#add').addEventListener('click',add)
document.querySelector('#sub').addEventListener('click',subtract)
