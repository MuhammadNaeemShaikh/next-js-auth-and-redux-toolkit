import React, { FC } from 'react';
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-7xl md:px-14 px-3 mx-2 ">{children}</div>;
};

export default Wrapper;
