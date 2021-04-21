import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { userDetailsAction } from '../../redux/actions/users';
// @ts-ignore
import * as styles from '../../styles';
import Loader from '../Wrapper/loader';
import { StyleConstants } from '../styleConstants';
import { UserRepo } from '../userDetails/userRepo';

import { UserHistory } from './userHistory';
import { UserProfile } from './userProfile';

export const UserDetails = () => {
  const dispatch = useDispatch();
  const { username }: any = useParams();
  useEffect(() => {
    dispatch(userDetailsAction({ username }));
  }, []);
  const { userDetails, userHistory, isLoading } = useSelector(
    (state: any) => state.userDetails,
  );

  return (
    <>
      {isLoading ? (
        <Loader className={styles.alignCenter}/>
      ) : (
        <div
          style={{
            display: 'inline-block',
            width: '100%',
            overflowY: 'auto',
            height: 'calc(100% - 90px)',
            backgroundColor: StyleConstants.colors.background,
          }}
        >
          <div style={{ width: 'calc(100% - 60px)', padding: '30px', display: 'inline-block' }}>
            <div className={styles.profileGrid}>
              <div className={styles.profileDataSection}>
                <UserProfile
                  userImage={userDetails[0].owner.avatar_url}
                  userName={userDetails[0].owner.login}
                  id={userDetails[0].owner.id}
                  repoCount={userDetails.length}
                />
                <span style={{ display: 'flex' }}>Repositories list:</span>
                {userDetails.map((repo: any) => {
                  return <UserRepo key={repo.name} repoName={repo.name} />;
                })}
              </div>
            </div>

            <div className={styles.profileGrid}>
              <div className={styles.profileHistorySection}>
                <h2 style={{ textAlign: 'left' }}>History</h2>
                {userHistory.length > 0 ? (
                  userHistory.map((item: any) => {
                    return (
                      <UserHistory
                        key={item.created_at}
                        userImage={item.actor.avatar_url}
                        userName={item.actor.login}
                        repoName={item.repo.name}
                        repoUrl={item.payload.pull_request.html_url}
                        userCase={item.payload.action}
                        createdAt={item.created_at}
                      />
                    );
                  })
                ) : (
                  <span>No History Found</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
