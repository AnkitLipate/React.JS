import {createStore} from 'redux';
import {reducers} from './reducers/index';

// 1st parameter- it accept the combine reducer object
//2nd parameter - initialstate
//third parameter - will add REDUX tab in developer tool 
const store=createStore(reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION
    );