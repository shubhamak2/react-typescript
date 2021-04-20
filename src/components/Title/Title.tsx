import * as React from 'react';

export const Title: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ children }) =>
  <h1>{children}</h1>;
