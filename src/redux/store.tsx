import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppReducer from './appReducer';
import FormReducer from './formReducer';

const rootReducer = combineReducers({ AppReducer, FormReducer });
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
