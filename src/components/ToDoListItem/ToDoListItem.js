import React, { Component } from 'react';
import ToDoAction from "../../redux/ToDo/ToDoAction"
import {connect} from "react-redux"

class ToDoListItem extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => this.setState({ value: target.value });

  handleSubmot = (e) => {
    e.preventDefault();
    const {deleteIdEditItem, changeTodo} = this.props;

    changeTodo(this.state.value)
    deleteIdEditItem()
  };

  render() {
    const {
      item,
      isShowForm,
      deleteTodo,
      addIdEditItem,
    } = this.props;
    const { value } = this.state;

    return (
      <li>
        <h3>{item.text}</h3>

        {!isShowForm && (
          <button type="button" onClick={addIdEditItem}>
            Start Edit
          </button>
        )}

        <button type="button" onClick={ deleteTodo}>
          Delete
        </button>

        {isShowForm && (
          <form onSubmit={this.handleSubmot}>
            <input type="text" value={value} onChange={this.handleChange} />
            <button type="submit" onClick={() => {}}>
              Edit
            </button>
          </form>
        )}
      </li>
    );
  }
}

// export default ToDoListItem;

const mapStateToProps = (state, {id}) => {
    const arrayIdsEditItem = state.todoRoot.idItemEdit;
    const isShowForm = arrayIdsEditItem.some(idEdit=> idEdit === id)
    return {
        isShowForm
    }
  };
  
  const mapDispatchToProps = (dispatch, {id}) => {
    return {
      deleteTodo: () => dispatch(ToDoAction.deleteItem(id)),
      changeTodo: ( text) => dispatch(ToDoAction.changeItem(id, text)),
      addIdEditItem: () => dispatch(ToDoAction.addIdEditItem(id)),
      deleteIdEditItem: () => dispatch(ToDoAction.deleteIdEditItem(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);