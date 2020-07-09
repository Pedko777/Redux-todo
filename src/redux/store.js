import { createStore } from 'redux';
import rootReducer from "./rootReducer"

const reducer = (state = {aaa: [111]}, action) => state;

export const store = createStore(rootReducer);