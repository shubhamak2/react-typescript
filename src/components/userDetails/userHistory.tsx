import moment from 'moment';
import React from 'react';

// @ts-ignore
import * as styles from '../../styles';
import { StyleConstants } from '../styleConstants';

interface UserHistory {
  userImage: string;
  userCase: string;
  userName: string;
  createdAt: string;
  repoName: string;
  repoUrl: string;
}

export const UserHistory = ({
  userImage,
  userCase,
  userName,
  createdAt,
  repoName,
  repoUrl,
}: UserHistory) => {
  const now = moment(createdAt).format('MMM DD, YYYY');

  return (
    <>
      <div className={styles.userHistoryContainer}>
        <span style={{ float: 'left' }}>{now}</span>
        <br />
        <br />
        <img
          className={styles.imgUserListHistory}
          src={userImage}
          style={{ float: 'left' }}
          alt="no image"
        />
        <div className={styles.userCardList}>
          <span className={styles.historyUserName}>
            {`@${userName}`} {userCase}
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', marginLeft: '7px', color: StyleConstants.colors.linkButton }}
            >
              pull request
            </a>
          </span>
          <span className={styles.repoName}>{repoName}</span>
        </div>
      </div>
    </>
  );
};
