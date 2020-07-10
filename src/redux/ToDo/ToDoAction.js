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

const deleteItem = (idItemDelete) => {
  return {
    type: ToDoTypes.DELETE_ITEM,
    payload: {
      id: idItemDelete,
    },
  };
};

const changeItem = (idItemChange, changeText) => {
  return {
    type: ToDoTypes.CHANGE_ITEM,
    payload: {
      id: idItemChange,
      text: changeText,
    },
  };
};

const addIdEditItem = id => {
  return {
    type: ToDoTypes.ADD_ID_EDIT_ITEM,

    payload: {
      id: id,
    },
  };
};

export default { addItem, deleteItem, changeItem, addIdEditItem };
