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
            padding: '30px',
            backgroundColor: StyleConstants.colors.background,
          }}
        >
          <div style={{ width: '100%' }}>
            <div className={styles.profileGrid}>
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

            <div className={styles.profileGrid}>
              <h2 style={{ textAlign: 'left' }}>History</h2>
              {userHistory.length > 0 ? (
                userHistory.map((item: any) => {
                  return (
                    <UserHistory
                      key={item.created_at}
                      userImage={item.actor.avatar_url}
                      userName={item.actor.login}
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
      )}
    </>
  );
};
