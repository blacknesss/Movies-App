import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

const defaultState = []

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case '':
            return
    
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter basename="/Movies-App">
            <App/>
        </BrowserRouter>
    </Provider>
);
