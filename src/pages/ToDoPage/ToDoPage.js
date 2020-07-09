import React from 'react';
import { connect } from 'react-redux';

const ToDoPage = ({listTodo}) => {
  return (
    <main>
      {/* <ul>
                {list.map(item => (
                    <li>{item.text}</li>
                ))}
            </ul> */}
      Todo Page
    </main>
  );
};

const mapStateToProps =(state)=> {
    return {listTodo: state.todo.todo}
}

export default connect(mapStateToProps)(ToDoPage);
