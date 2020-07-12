import React, { Component } from 'react';

class ToDoListItem extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => this.setState({ value: target.value });

  handleSubmot = e => {
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
    //   deleteIdEditItem,
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

        <button type="button" onClick={() => deleteTodo(item.id)}>
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

export default ToDoListItem;
