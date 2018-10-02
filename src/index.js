import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './component/Home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

var store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
