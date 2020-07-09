import {combineReducers} from "redux";

import ToDoReducer from "./ToDo/ToDoReducer"

const rootReducer = combineReducers({
todoRoot: ToDoReducer,
})
export default rootReducer;