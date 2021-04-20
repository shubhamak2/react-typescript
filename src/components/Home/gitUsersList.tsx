import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addgitUsers } from '../../redux/actions/users';
import { fetchgitUsersListStart } from '../../redux/reducers';
import * as styles from '../../styles';
import Loader from '../Wrapper/loader';

import User from './user';

export const GitUsersList = () => {
  const handleScroll = (event: any) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) {
      dispatch(addgitUsers());
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchgitUsersListStart());
  }, []);

  const { customerList, isLoading } = useSelector(
    (state: any) => state.customerList,
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          onScroll={handleScroll}
          style={{ overflow: 'auto', height: 'calc(90vh - 116px)' }}
        >
          <div className={styles.wrapper}>
            {customerList.map((item: any) => {
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
