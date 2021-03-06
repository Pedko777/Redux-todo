import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoAction from "../../redux/ToDo/ToDoAction"


class FormPage extends Component {
  state = { value: '' };

  handleChange = ({ target }) => this.setState({ value: target.value });

  handleSubmit = (e)=>{
      e.preventDefault()
    //   console.log(this.props)
      const {addTodo}= this.props
    //   console.log(addTodo)
      addTodo(this.state.value)
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={value} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { addTodo: (text) => dispatch(ToDoAction.addItem(text)) };
};

export default connect(null, mapDispatchToProps)(FormPage);
