import ToDoTypes from './ToDoTypes';

const addItem = (text) => {
  return {
    type: ToDoTypes.ADD_ITEM,
    payload: {
      todo: {
          id: Date.now(),
          text,
      },
    },
  };
};
export default {addItem};