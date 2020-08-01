import { user } from "./user";
import { History } from "history";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = ( history: History ) => combineReducers({
    user,
    router: connectRouter( history ),
})

export default createRootReducer
