import { user } from "./user";
import { History } from "history";
import { language } from "./language";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = ( history: History ) => combineReducers({
    user,
    language,
    router: connectRouter( history ),
})

export default createRootReducer
