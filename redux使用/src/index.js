import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {counter} from './index.redux'

import App from './App';
import {addGUN,removeGUN,setGun} from './index.redux';

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():fn=>fn
));

///    window.devToolsExtension?window.devToolsExtension():fn=>fn  redux调用工具

function render(){
    ReactDom.render( <App
        store={store}
        addGUN={addGUN}
        removeGUN={removeGUN}
        setGun={setGun}
    /> ,document.getElementById('root'))
}
render();
store.subscribe(render);