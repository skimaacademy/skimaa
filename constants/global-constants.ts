export type NavLink = {
  name: string;
  href: string;
};

export const NavLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Blog & News', href: '/blog-and-news' },
  { name: 'Pricing', href: '/pricing' },
];