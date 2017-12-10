import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      textInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      textInput: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Hello');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label
          htmlFor="username"
        >{this.props.label}
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter any text"
          value={this.state.textInput}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button
          type="submit"
          disabled={!this.state.textInput}
        >
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  label: PropTypes.string,
  buttonText: PropTypes.string,
};

Form.defaultProps = {
  label: 'Any text',
  buttonText: 'Submit',
};
