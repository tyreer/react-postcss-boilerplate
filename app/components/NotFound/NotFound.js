import React from 'react';
import PropTypes from 'prop-types';

export default function NotFound(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

NotFound.defaultProps = {
  title: 'Not Found',
  message: 'Sorry, but the URL entered cannot be found',
};
