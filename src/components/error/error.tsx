import React, { FC } from 'react';

type Props = {
  errorData: string
};

export const Error: FC<Props> = ({ errorData }) => (
  <div className="error">
    <p className="error__data">{errorData}</p>
  </div>
);
