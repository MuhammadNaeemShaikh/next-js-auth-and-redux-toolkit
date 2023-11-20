export interface NavbarItemType {
  label: string;
  href: string;
}

export const NavbarItem: NavbarItemType[] = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'about',
    href: '/about',
  },
  {
    label: 'services',
    href: '/services',
  },
  {
    label: 'portfolio',
    href: '/portfolio',
  },
  {
    label: 'contact',
    href: '/contact',
  },
];
