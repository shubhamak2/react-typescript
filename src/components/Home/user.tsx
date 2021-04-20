import React from 'react';

import * as styles from '../../styles';

interface UserProps {
  login: string;
  id: string;
  url: string;
}

export const User = ({ login, id, url }: UserProps) => {
  return (
    <div className={styles.gridItem}>
      <img src={url} style={{ float: 'left' }} alt="no image"/>
      <span>{login}</span>
      <br />
      ID: {id}
      <br />
      Team badge: A
    </div>
  );
};

export default User;
