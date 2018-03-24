import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducer/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './config'
import './index.css'

import AuthRouter from './component/authrouter/authrouter';
import Register from  './container/register/register'
import Login from  './container/login/login'
import SellInfo from './container/sell/sellinfo'
import BuyInfo from './container/buy/buyinfo'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
ReactDom.render(
    (<Provider store={store} >
        <BrowserRouter>
           <div>
               <AuthRouter ></AuthRouter>
               <Switch>
                   <Route path='/sellinfo'  component={SellInfo}/>
                   <Route path='/buyinfo'  component={BuyInfo}/>
                   <Route path='/login'  component={Login}/>
                   <Route path='/register'  component={Register}/>
                   <Route path='/chat/:user'  component={Chat}/>
                   <Route  component={Dashboard}/>
               </Switch>
           </div>
        </BrowserRouter>
    </Provider>)
 ,document.getElementById('root'))

