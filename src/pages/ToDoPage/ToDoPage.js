import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoAction from '../../redux/ToDo/ToDoAction';

import ToDoListItem from '../../components/ToDoListItem/ToDoListItem';

const ToDoPage = ({
  listTodo,
  arrayIdsEditItem,

  changeTodo,
  deleteTodo,
  addIdEditItem,
  deleteIdEditItem,
  }) => {
  // console.log(listTodo)
  return (
    <main>
      <h2>Todo Page</h2>
      <ul>
        {listTodo.map(item => (
          <ToDoListItem
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
            addIdEditItem={() => addIdEditItem(item.id)}
            isShowForm={arrayIdsEditItem.some(id => id === item.id)}
            deleteIdEditItem={()=>deleteIdEditItem(item.id)}
            changeTodo={(text)=>changeTodo(item.id, text)}
          />
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    listTodo: state.todoRoot.todo,
    arrayIdsEditItem: state.todoRoot.idItemEdit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(ToDoAction.deleteItem(id)),
    changeTodo: (id, text) => dispatch(ToDoAction.changeItem(id, text)),
    addIdEditItem: id => dispatch(ToDoAction.addIdEditItem(id)),
    deleteIdEditItem: id => dispatch(ToDoAction.deleteIdEditItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
