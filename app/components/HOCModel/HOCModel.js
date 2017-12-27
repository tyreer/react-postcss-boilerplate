import React from 'react';
import PropTypes from 'prop-types';

const HOCModel = Component => class extends React.Component {
    displayName: 'HOCModel';

    state = { x: 0, y: 0 }

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      });
    }

    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
};


function BasicComponent(props) {
  // Instead of maintaining our own state,
  // we get the mouse position as a prop!
  const { x, y } = props.mouse;

  return (
    <div style={{ height: '100%' }}>
      <h1>Via wrapped BasicComponent:</h1>
      <h1>The mouse position is ({x}, {y})</h1>
    </div>
  );
}

BasicComponent.propTypes = {
  mouse: PropTypes.object.isRequired,
};

// Just wrap your component in HOCModel and
// it'll get the mouse prop!
const BasicComponentWithHOC = HOCModel(BasicComponent);
export default BasicComponentWithHOC;
