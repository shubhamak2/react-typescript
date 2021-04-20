import React from 'react';

// @ts-ignore
import logo from '../../assets/github_logo.png';
// @ts-ignore
import * as styles from '../../styles';

export const GithubLogoText = () => {
  return (
    <div className={styles.cardLogo}>
      <img alt={'github logo'} className={styles.cardLogoGithub} src={logo} />
      <span className={styles.logoText}>Github Page</span>
    </div>
  );
};

export default GithubLogoText;
