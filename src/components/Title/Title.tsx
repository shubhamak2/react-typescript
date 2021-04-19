import * as React from 'react';

import * as styles from './title.css';

export const Title: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ children }) =>
  <h1 className={styles.title}>{children}</h1>;
