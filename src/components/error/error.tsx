import React from 'react';
import PropTypes from 'prop-types';

export const Error = ({ errorData }) => (
  <div className="error">
    <p className="error__data">{errorData}</p>
  </div>
);

Error.propTypes = {
  errorData: PropTypes.string.isRequired,
};
