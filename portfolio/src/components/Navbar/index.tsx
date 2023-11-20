import { NavbarItem, NavbarItemType } from '@/utils/navbarItem';
import Link from 'next/link';
import React from 'react';

const Navbar = (props: { pageName: string }) => {
  return (
    <div className="flex justify-between">
      <div className="uppercase">
        <span className="font-extrabold tracking-widest">Muhammad</span>
        <span className="font-light">Naeem</span>
      </div>
      <div className="">
        <div className="">
          <ul className="hidden md:flex uppercase font-light space-x-2 tracking-normal ">
            {NavbarItem.map((item: NavbarItemType, index: number) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`${
                    props.pageName === item.label
                      ? 'border-black border-b-2 pb-1'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
