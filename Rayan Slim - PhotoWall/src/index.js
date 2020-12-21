import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';
import './index.css';
import Application from './Components/Application';


const store = createStore(rootReducer, applyMiddleware(Thunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><Application /></BrowserRouter></Provider>,
    document.getElementById('root'));

