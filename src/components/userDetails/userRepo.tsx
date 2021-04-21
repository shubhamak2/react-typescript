import React from 'react';

// @ts-ignore
import * as styles from '../../styles';

export const UserRepo = ({ repoName }: any) => {
  return (
    <div style={{ display: 'flex' }}>
      <span>&#8226;</span>&nbsp;<span>{repoName}</span>
    </div>
  );
};
