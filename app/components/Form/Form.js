import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { testAPIGet } from '../../utils/api';

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
      fetchRepsonse: null,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      const data = await testAPIGet(this.state.textInput);
      this.setState({
        fetchRepsonse: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label
            htmlFor="anyText"
          >{this.props.label}
          </label>
          <input
            type="text"
            id="anyText"
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

        {!this.state.fetchRepsonse
          ? <h3>No data</h3>
          : <h3>{this.state.fetchRepsonse}</h3>}
      </div>
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
