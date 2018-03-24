import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
// import {counter} from './index.redux'
import reducers from './reducers'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import './config'

import Dashboard from './dashboard'
import Auth from './auth'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():fn=>fn
));
ReactDom.render(
    (<Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route path='/login'  component={login}/>
                <Route path='/register'  component={Auth}/>
                <Route path='/dashboard'  component={Dashboard}/>
                <Redirect to='/dashboard'/>
            </Switch>
        </BrowserRouter>
    </Provider>)
 ,document.getElementById('root'))

