import React from 'react';
import styles from './Loading.module.css';

const RefreshingUser = props => {
  return (
    <div className={styles.loading}>
      <span className={styles.spinner}></span>
      <span>Refreshing user...</span>
    </div>
  );
};

RefreshingUser.propTypes = {};

export default RefreshingUser;
