import Link from 'next/link';
import React from 'react';

type IProps = {
  pageName: string;
};

const Nav = (props: IProps) => {
  const isLoggedIn: boolean = false;

  return (
    <div>
      <h1>{props.pageName ? props.pageName : null}</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      {isLoggedIn ? <Link href="/dashboard">Dashboard</Link> : null}
    </div>
  );
};

export default Nav;
