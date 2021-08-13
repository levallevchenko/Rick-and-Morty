// Core
import React, { FC } from 'react';

// Types
import { appearingData } from '../../types/basic';

type Props = {
  errorData: appearingData<string>;
};

export const Error: FC<Props> = ({ errorData }) => (
  <div className="error">
    <p className="error__data">
      {errorData}
      . Please try again.
    </p>
  </div>
);
