import {combineReducers} from "redux";

import ToDoReducer from "./ToDo/ToDoReducer"

const rootReducer = combineReducers({
todo: ToDoReducer,
})
export default rootReducer;