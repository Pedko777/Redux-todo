import React from 'react';
import { connect } from 'react-redux';
import ToDoAction from '../../redux/ToDo/ToDoAction';

const ToDoPage = ({ listTodo, deleteTodo }) => {
  console.log(listTodo);

  return (
    <main>
      <h1>Todo Page</h1>
      <ul>
        {listTodo.map(item => (
          <li key={item.id}>
            <h3>{item.text}</h3>
            <button type="button" onClick={() => deleteTodo(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => {
  return { listTodo: state.todoRoot.todo };
};

const mapDispatchToProps = dispatch => {
  return { deleteTodo: id => dispatch(ToDoAction.deleteItem(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
