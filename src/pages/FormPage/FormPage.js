import React, { Component } from 'react';

class FormPage extends Component {
  state = {value: '' };

  handleChange = ({target}) => this.setState({ value: target.value });

  render() {
    const { value } = this.state;
    return (
      <>
        <form>
          <input type="text" value={value}  onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default FormPage;
