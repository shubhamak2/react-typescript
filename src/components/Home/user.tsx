import React from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import * as styles from '../../styles';
import GithubLogoText from '../Wrapper/githubLogoText';
import Team from '../Wrapper/team';
import { StyleConstants } from '../styleConstants';

interface UserProps {
  login: string;
  id: string;
  url: string;
}

export const User = ({ login, id, url }: UserProps) => {
  return (
    <div className={styles.gridItem}>
      <div className={styles.userListDetailContainer}>
        <img
          className={styles.imgUserList}
          src={url}
          style={{ float: 'left' }}
          alt="no image"
        />
        <div className={styles.userCardList}>
          <span className={styles.username}>{`@${login}`}</span>
          <div className={styles.teamData}>
            <Team id={id} />
          </div>
          <GithubLogoText />
          <br />
        </div>
      </div>
      <div className={styles.userListFooterContainer}>
        <div style={{ marginTop: '12px' }}>
          <Link
            to={`/user-details/${login}`}
            style={{
              textDecoration: 'none',
              color: StyleConstants.colors.linkButton,
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
