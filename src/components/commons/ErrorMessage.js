import React from 'react';

const ErrorMessage = ({ error }) => {
  return <h1>{error.mesage}</h1>;
};

export default React.memo(ErrorMessage);
