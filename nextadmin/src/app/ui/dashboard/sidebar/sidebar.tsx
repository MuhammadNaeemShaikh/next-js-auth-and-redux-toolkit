import { menuItems } from '@/utils/sidebarItem';
import React from 'react';
import MenuLink from './menuLink/MenuLink';
import style from './sidebar.module.css';
import Image from 'next/image';
import { MdLogout } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className={`${style.container} hidden`}>
      <div className={style.user}>
        <Image
          src="/noavatar.png"
          width={400}
          height={400}
          alt="user Picture"
          className="w-8 h-8 rounded-full"
        />
        <div className={style.userDetail}>
          <span className={style.userName}>John Doe</span>
          <span className={style.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={style.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={style.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
