// import React from 'react';
// import ReactDOM from 'react-dom';

import {createStore} from 'redux';


/**
 *
 * @param state
 * @param action
 * @returns {*}
 * 1 新建store
 * 2 通过reducer建立
 * 3 根据老的state 和action 生成心的state
 */
function counter(state=0,action){
    switch (action.type){
        case '加机关枪':
            return state +1
        case  '减机关枪':
            return state -1
        default:
            return 10
    }
}
//1 新建store
const store = createStore(counter);
const init = store.getState();
console.log(init);
//订阅一个事件
function listener(){
    const current = store.getState();
    console.log(`现在的机关枪${current}把`);
}
store.subscribe(listener)

//派发事件 传递action
store.dispatch({type:'加机关枪'})
console.log(store.getState())
store.dispatch({type:'加机关枪'})
console.log(store.getState())
store.dispatch({type:'减机关枪'})
console.log(store.getState())