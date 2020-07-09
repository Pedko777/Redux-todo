import ToDoTypes from './ToDoTypes';

export const addItem = () => {
  return {
    type: ToDoTypes.ADD_ITEM,
    payload: {
      todo: {},
    },
  };
};
