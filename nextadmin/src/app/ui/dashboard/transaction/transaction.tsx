import React from 'react';
import styles from './trasaction.module.css';
import Image from 'next/image';

const Transaction = () => {
  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>Latest Transaction</h2>
      <label className={`${styles.label}`}>
        <table className={`${styles.table}`}>
          <thead>
            <tr>
              <td className={`${styles.td}`}>Name</td>
              <td className={`${styles.td}`}>Status</td>
              <td className={`${styles.td}`}>Date</td>
              <td className={`${styles.td}`}>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.td}`}>
                <div className={`${styles.user}`}>
                  <Image
                    src="/noavatar.png"
                    alt={'user Image'}
                    width={30}
                    height={40}
                    className={styles.image}
                  />
                  John Doe
                </div>
              </td>
              <td className={`${styles.status} ${styles.pending}`}>Pending</td>
              <td className={`${styles.td}`}>12/1/2023</td>
              <td className={`${styles.td}`}>3.21$</td>
            </tr>
            <tr>
              <td className={`${styles.td}`}>
                <div className={`${styles.user}`}>
                  <Image
                    src="/noavatar.png"
                    alt={'user Image'}
                    width={30}
                    height={40}
                    className={styles.image}
                  />
                  John Doe
                </div>
              </td>
              <td className={`${styles.status} ${styles.done}`}>Done</td>
              <td className={`${styles.td}`}>12/1/2023</td>
              <td className={`${styles.td}`}>3.21$</td>
            </tr>
            <tr>
              <td className={`${styles.td}`}>
                <div className={`${styles.user}`}>
                  <Image
                    src="/noavatar.png"
                    alt={'user Image'}
                    width={30}
                    height={40}
                    className={styles.image}
                  />
                  John Doe
                </div>
              </td>
              <td className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </td>
              <td className={`${styles.td}`}>12/1/2023</td>
              <td className={`${styles.td}`}>3.21$</td>
            </tr>
          </tbody>
        </table>
      </label>
    </div>
  );
};

export default Transaction;
