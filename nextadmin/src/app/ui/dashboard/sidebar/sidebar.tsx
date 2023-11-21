import { menuItems } from '@/utils/sidebarItem';
import React from 'react';
import MenuLink from './menuLink/MenuLink';

const Sidebar = () => {
  return (
    <div>
      {menuItems.map((cat) => (
        <li key={cat.title}>
          <span className="">{cat.title}</span>
          {cat.list.map((item) => (
            <MenuLink item={item} key={item.title} />
          ))}
        </li>
      ))}
    </div>
  );
};

export default Sidebar;
