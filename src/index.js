import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import BlogDetails from './component/BlogDetails';
import BlogForm from './component/BlogForm';

var store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/blogs" component={Home} />
                <Route path="/blogs/:id" component={BlogDetails} />
                <Route path="/blogs/addNew" component={BlogForm} />
                <Route path='/blogs/edit/:id' component={BlogForm} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
