import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsAction } from "../../redux/actions/users";
import { UserProfile } from "./userProfile";
import { UserHistory } from "./userHistory";
import Loader from "../Wrapper/loader";
import { UserRepo } from "../userDetails/userRepo";
import { StyleConstants } from "../styleConstants";
// @ts-ignore
import * as styles from "../../styles";

export const UserDetails = () => {
  const handleScroll = (event: any) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) {
    }
  };
  const dispatch = useDispatch();
  const { username }: any = useParams();
  useEffect(() => {
    dispatch(userDetailsAction({ username }));
  }, []);
  const { userDetails, userHistory, isLoading } = useSelector(
    (state: any) => state.userDetails
  );
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          onScroll={handleScroll}
          style={{
            overflow: "auto",
            height: "calc(90vh - 116px)",
            padding: "30px",
            backgroundColor: StyleConstants.colors.background,
          }}
        >
          <div className={styles.wrapper}>
            <div className={styles.gridItem}>
              <UserProfile
                userImage={userDetails[0].owner.avatar_url}
                userName={userDetails[0].owner.login}
                id={userDetails[0].owner.id}
                repoCount={userDetails.length}
              />
              <span style={{ display: "flex" }}>Repositories list:</span>
              {userDetails.map((repo: any) => {
                return <UserRepo repoName={repo.name} />;
              })}
            </div>

            <div className={styles.gridItem}>
              <h2 style={{ textAlign: "left" }}>History</h2>
              {userHistory.length > 0 ? (
                userHistory.map((item: any) => {
                  return (
                    <UserHistory
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
