import Link from 'next/link';
import React from 'react';
import { MenuItem } from '@/utils/sidebarItem';

const MenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link href={item.path}>
      {item.title}
      {item.icon}
    </Link>
  );
};

export default MenuLink;
