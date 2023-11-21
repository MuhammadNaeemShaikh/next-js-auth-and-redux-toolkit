import React from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';
import Style from '../ui/dashboard/dashboard.module.css';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={Style.container}>
      <div className={Style.menu}>
        <Sidebar />
      </div>
      <div className={Style.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
