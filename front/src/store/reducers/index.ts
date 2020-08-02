import { user } from "./user";
import { task } from "./task";
import { History } from "history";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = ( history: History ) => combineReducers({
    user,
    task,
    router: connectRouter( history ),
})

export default createRootReducer
