import logoImg from '../public/img/Logo.png';

export const MDNavigation = {
  logoSrc: logoImg,
  logoAlt: 'gplx',
  navigationList: [
    {
      title: 'Home',
      url: '/',
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

export const MDBanner = {
  title: 'Sát hạch GPLX(SHG)',
  title1:
    'Website giúp bạn ôn tập các câu hỏi lý thuyết của bằng lái loại A1, A2',
  title2:
    'Bao gồm 200 câu hỏi lý thuyết chia thành 4 nhóm câu hỏi giúp ôn tập dễ dàng!',
  backgroundImage: '/img/408464bde9871fc229045a3dab96794a.jpg',
};

export const MDService = {
  mainContent: [
    {
      iconClass: 'fi fi-sr-book-alt',
      title: 'Ôn tập',
      description:
        'Lựa chọn một trong 4 nhóm câu hỏi để ôn tập dưới dạng trắc nghiệm',
    },
    {
      iconClass: 'fi fi-sr-graduation-cap',
      title: 'Thi thử',
      description:
        'Lựa chọn một trong 8 bộ đề để thi thử dưới dạng trắc nghiệm',
    },
    {
      iconClass: 'fi fi-sr-book',
      title: 'Ôn lại',
      description: 'Ôn tập lại những câu hỏi  bạn cảm thấy khó nhớ',
    },
  ],
};
