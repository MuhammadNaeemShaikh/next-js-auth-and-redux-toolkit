import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Muhammad Neem</div>
      <div className={styles.text}>&copy; All Right Resevered</div>
    </div>
  );
};

export default Footer;
