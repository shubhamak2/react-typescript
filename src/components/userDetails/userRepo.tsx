import React from "react";
// @ts-ignore
import * as styles from "../../styles";

export const UserRepo = ({ repoName }: any) => {
  return (
    <div style={{ display: "flex" }}>
      <span>{repoName}</span>
    </div>
  );
};
