import React from 'react';
import { connect } from 'react-redux';

const ToDoPage = ({ listTodo }) => {
  console.log(listTodo);

  return (
    <main>
      <h1>Todo Page</h1>
      <ul>
        {listTodo.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => {
  return { listTodo: state.todo.todo };
};

export default connect(mapStateToProps)(ToDoPage);
