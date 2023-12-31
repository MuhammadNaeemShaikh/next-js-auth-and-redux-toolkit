import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

const Header = () => {
  const { data } = useSession();

  useEffect(() => {}, []);
  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <a className="navbar-brand" style={{ marginLeft: '20px' }} href="#">
            Next.13 Authentication
          </a>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          {data?.user ? (
            <div>
              <span style={{ marginRight: '15px' }}>{data.user.name}</span>

              <span onClick={() => signOut()}> Logout</span>
            </div>
          ) : (
            <span style={{ marginRight: '15px' }}>
              {' '}
              <Link className="nav-link" href="/login">
                Login
              </Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
