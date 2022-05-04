import logoImg from '../public/img/Logo.png';

export const navigation = {
  logoSrc: logoImg,
  logoAlt: 'gplx',
  navigationList: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Menu',
      submenu: [
        {
          title: 'Menu Special',
          url: '/menuspecial',
          id: 'menu1',
        },
        {
          title: 'Menu',
          id: 'menu2',
          url: '/menu',
        },
      ],
    },
    {
      title: 'Blog',
      submenu: [
        {
          title: 'Blog',
          url: '/blogs',
          id: 'blog1',
        },
        {
          title: 'Blog Single',
          url: '/blogsingle',
          id: 'blog2',
        },
      ],
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ],
  socialIcons: [
    {
      url: '#',
      icon: 'fa-brands fa-facebook-f',
    },
    {
      url: '#',
      icon: 'fa-brands fa-twitter',
    },
    {
      url: '#',
      icon: 'fa-brands fa-google-plus-g',
    },
    {
      url: '#',
      icon: 'fa-brands fa-tumblr',
    },
  ],
};
