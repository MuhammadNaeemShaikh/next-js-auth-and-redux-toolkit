import React from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';
import Style from '../ui/dashboard/dashboard.module.css';
import Footer from '../ui/dashboard/footer/footer';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap">
      <div className="md:flex-1 p-[20px]">
        <Sidebar />
      </div>
      <div className="md:flex-[4] p-[20px]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
