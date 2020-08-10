import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default () =>{
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return store;
}