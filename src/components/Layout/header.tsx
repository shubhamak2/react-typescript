import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// @ts-ignore
import logo from '../../assets/github_logo.png';
// @ts-ignore
import * as styles from '../../styles';
import { StyleConstants } from '../styleConstants';

const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div>
        {
          location.pathname !== '/'
          &&
          <Link
            to={'/'}
            style={{
              textDecoration: 'none',
              color: StyleConstants.colors.linkButton,
            }}
          >
          Back
          </Link>
        }
      </div>
      <div className={styles.headerLogoContainer}>
        <img className={styles.headerLogoImage} alt={'github logo'} src={logo}/>
        <span className={styles.headerLogoText}>Github Users</span>
      </div>
    </div>
  );
};

export default Header;
