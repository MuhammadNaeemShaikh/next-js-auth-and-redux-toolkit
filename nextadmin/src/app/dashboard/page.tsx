import React from 'react';
import Card from '../ui/dashboard/card/card';
import styles from '../ui/dashboard/dashboard.module.css';
import Rightbar from '../ui/dashboard/rightbar/rightbar';
import Transaction from '../ui/dashboard/transaction/transaction';
import Chart from '../ui/dashboard/chart/chart';

const page = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default page;
