import React, { FC } from 'react';
import PropTypes from 'prop-types';

export const Error: FC = ({ errorData }) => (
  <div className="error">
    <p className="error__data">{errorData}</p>
  </div>
);

Error.propTypes = {
  errorData: PropTypes.string.isRequired,
};
