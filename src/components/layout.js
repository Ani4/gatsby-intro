import React from 'react';
import { Global, css } from '@emotions/core';

export default Layout = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        * + * {
          margin-top: 1rem;
        }
      `}
    />
  );
};
