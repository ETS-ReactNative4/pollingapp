import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login/login';
import Poll from './poll/poll';
import Signup from './login/signup';
import thunk from 'redux-thunk';
import reducer from './store/reducers/auth';
import tagReducer from './store/reducers/tagReducer';

let username;
let token = localStorage.getItem('token');

const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
});

fetch('http://localhost:8000/rest-auth/user/', { 
    method: 'GET', 
    headers: myHeaders,
})
.then(response => response.json())
.then((json) => {
    username = json.username;
});

console.log(username)

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const allReducers = combineReducers({
    reducer,
    tagReducer
})

const store = createStore(allReducers, composeEnhances(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
