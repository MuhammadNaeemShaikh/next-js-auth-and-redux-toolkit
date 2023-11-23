import React from 'react';
import styles from './rightbar.module.css';
import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={`/astronaut.png`} alt="astronaut Image" fill className={styles.image}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}> Availble Now</span>
          <h3 className={styles.title}>
            How to use the new Version of Admin Dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            quas voluptas labore quam cupiditate, totam dicta sit recusandae
            optio assumenda laboriosam dignissimos eaque eius minima officiis
            provident maiores aperiam iste.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
