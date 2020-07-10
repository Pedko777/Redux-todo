import React, { Component } from 'react';

class ToDoListItem extends Component {
  state = {
    value: '',
  };
  handleChange = ({ target }) => this.setState({ value: target.value });

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

        {!isShowForm && <button type="button" onClick={addIdEditItem}>
          Start Edit
        </button>}

        <button type="button" onClick={() => deleteTodo(item.id)}>
          Delete
        </button>

        {isShowForm && (
          <form onSubmit={() => {}}>
            <input type="text" value={value} onChange={this.handleChange} />
            <button type="button" onClick={() => {}}>
              Edit
            </button>
          </form>
        )}
      </li>
    );
  }
}

export default ToDoListItem;
