'use client';
import Link from 'next/link';
import React from 'react';
import { MenuItem } from '@/utils/sidebarItem';
import style from './MenuLink.module.css';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }: { item: MenuItem }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${style.container} ${pathName === item.path && style.active}`}
    >
      {item.title}
      {item.icon}
    </Link>
  );
};

export default MenuLink;
