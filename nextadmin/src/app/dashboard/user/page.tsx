import React from 'react';
import styles from '../../ui/dashboard/user/user.module.css';
import Search from '@/app/ui/dashboard/Search/Search';
import Link from 'next/link';
import Image from 'next/image';

const user = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search For a User" />
        <Link href="/dashboard/user/add">
          <button className={styles.btn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user Image"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                John Doe
              </div>
            </td>
            <td>JohnDoe@gmail.com</td>
            <td>11-27-2023</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.viewAndDltBtn}>
                <Link href="/">
                  <button className={`${styles.view} ${styles.button}`}>
                    View
                  </button>
                  <button className={`${styles.dlt} ${styles.button}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default user;
