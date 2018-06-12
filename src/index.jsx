import React from 'react';
import { render } from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import styles from './styles/index.less';
import reducers from './reducers/index';
import {App} from './components/App.jsx';
import initialData from '../data';

const logger = createLogger();
const store = createStore(
    reducers,
    initialData,
    applyMiddleware(thunk, promise, logger)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
