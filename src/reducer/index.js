import { combineReducers } from "redux";
import userReducer from './userReducer';
import postReducer from "./postReducer";

const allReducers = combineReducers({
    users: userReducer,
    posts: postReducer
})

export default allReducers;