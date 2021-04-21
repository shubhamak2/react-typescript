import React from 'react';

// @ts-ignore
import logo from '../../assets/github_logo.png';
// @ts-ignore
import * as styles from '../../styles';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <img className={styles.headerLogoImage} alt={'githuv logo'} src={logo}/>
        <span className={styles.headerLogoText}>Github Users</span>
      </div>
    </div>
  );
};

export default Header;
