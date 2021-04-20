import React from 'react';

interface UserProps {
  login: string;
  id: string;
  url: string;
}

export const User = ({ login, id, url }: UserProps) => {
  return (
    <div className={'gridItem'}>
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
