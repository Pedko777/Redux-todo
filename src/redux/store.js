import { createStore } from 'redux';
import rootReducer from './rootReducer';

const todo = [{
    id: 1,
    text: "to do ZERO"
}, 
{
    id: 2,
    text: "to do ONE"
},
{
    id: 3,
    text: "to do TWO"
}]

export const store = createStore(
  rootReducer,
  {todoRoot: {todo}},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
