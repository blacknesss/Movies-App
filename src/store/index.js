import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { dataReducer } from "./dataReducer";
import {customReducer} from './customReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    custom: customReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));