import React from 'react';

import { StyleConstants } from '../styleConstants';

interface TeamProps {
  id: string;
}

const checkTeam = (id: string) => {
  let team = '';
  const idInt = parseInt(id, 10);
  if (idInt % 4 === 0 && idInt % 6 === 0) {
    team = 'C';
  } else if (idInt % 4 === 0) {
    team = 'A';
  } else if (idInt % 6 === 0) {
    team = 'B';
  }

  return team;
};

const styles: any = {
  common: {
    padding: '3px',
    marginRight: '9px',
    float: 'left',
    height: '12px',
    fontSize: '12px',
  },
  id: {
    float: 'left',
    color: StyleConstants.colors.secondaryText,
  },
};

export const Team = ({ id }: TeamProps) => {
  const team = checkTeam(id);
  const teamStyle = StyleConstants.badges[team];

  return (
    <>
      {
        team
        && <span style={{ ...styles.common, ...teamStyle }}> Team {team} </span>
      }
      <span style={styles.id}> ID: {`# ${id}`} </span>
    </>
  );
};

export default Team;
