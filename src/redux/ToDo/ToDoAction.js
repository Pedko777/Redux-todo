import ToDoTypes from './ToDoTypes';

const addItem = text => {
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

const deleteItem = idItemDelete => {
  return {
    type: ToDoTypes.DELETE_ITEM,
    payload: {
      id: idItemDelete,
    },
  };
};

export default { addItem, deleteItem };
