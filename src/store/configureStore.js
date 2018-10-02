import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/reducers';
import thunk from 'redux-thunk';


export default function configureStore(intialState){
    return createStore(
        reducers,
        intialState,
        applyMiddleware(thunk)
    )
}