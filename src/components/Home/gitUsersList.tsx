import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMoreUsers } from '../../redux/actions/users';
import { fetchGitUsersListStart } from '../../redux/gitUsersList';
// @ts-ignore
import * as styles from '../../styles';
import Loader from '../Wrapper/loader';
import { StyleConstants } from '../styleConstants';

import User from './user';

export const GitUsersList = () => {
  const handleScroll = (event: any) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) {
      dispatch(addMoreUsers());
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGitUsersListStart());
  }, []);

  const { userList, isLoading } = useSelector(
    (state: any) => state.userList,
  );

  return (
    <>
      {isLoading ? (
        <Loader className={styles.alignCenter}/>
      ) : (
        <div
          onScroll={handleScroll}
          style={{ overflow: 'auto', height: 'calc(90vh - 116px)', padding: '30px', backgroundColor: StyleConstants.colors.background }}
        >
          <div className={styles.wrapper}>
            {userList.map((item: any) => {
              return (
                <User
                  key={item.id}
                  login={item.login}
                  url={item.avatar_url}
                  id={item.id}
                />
              ); })
            }
          </div>
          <Loader />
        </div>
      )}
    </>
  );
};
