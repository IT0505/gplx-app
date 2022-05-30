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
  backgroundImage: '/img/background-1.jpg',
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
<<<<<<< Updated upstream
=======

export const MDGroup_quest = [
  {
    name: 'Điểm liệt',
    list_quest:
      '3,4,5,9,12,28,29,30,33,53,54,79,104,129,135,152,153,154,177,179',
  },
  {
    name: 'Lý thuyết',
    list_quest:
      '1,2,7,8,10,11,13,26,27,31,32,34,35,36,37,38,51,52,55,56,57,58,59,60,61,62,63,76,77,80,81,82,83,84,85,86,87,88,101,102,103,105,106,107,108,109,110,111,112,126,127,128,130,131,132,133,134,136,137,151,155,156,157,158,159,160,161,162,176,178,180,181,182,183,184,185,186,187',
  },
  {
    name: 'Biển báo',
    list_quest:
      '6,14,15,16,17,18,19,20,21,39,40,41,42,43,44,45,46,64,65,66,67,68,69,70,71,89,90,91,92,93,94,95,96,113,114,115,116,117,118,119,120,121,138,139,140,141,142,143,144,145,163,164,165,166,167,168,169,170,188,189,190,191,192,193,194,195',
  },
  {
    name: 'Điểm liệt',
    list_quest:
      '22,23,24,25,47,48,49,50,72,73,74,75,97,98,99,100,122,123,124,125,146,147,148,149,150,171,172,173,174,175,196,197,198,199,200',
  },
];

>>>>>>> Stashed changes
export const listQuestion = [
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
<<<<<<< Updated upstream
    ans: {
      true_ans: 3,
=======
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
>>>>>>> Stashed changes
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
<<<<<<< Updated upstream
    ans: {
      true_ans: 3,
=======
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
>>>>>>> Stashed changes
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
<<<<<<< Updated upstream
    ans: {
      true_ans: 3,
=======
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
>>>>>>> Stashed changes
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
<<<<<<< Updated upstream
    ans: {
      true_ans: 3,
=======
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
>>>>>>> Stashed changes
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
<<<<<<< Updated upstream
    ans: {
      true_ans: 3,
=======
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
>>>>>>> Stashed changes
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
<<<<<<< Updated upstream
    ans: {
      true_ans: 3,
=======
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
>>>>>>> Stashed changes
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/14.jpg',
    },
<<<<<<< Updated upstream
    ans: {
      true_ans: 3,
=======
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
>>>>>>> Stashed changes
      list: [
        'Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
<<<<<<< Updated upstream
=======
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/15.jpg',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/16.jpg',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '',
    },
    answer: {
      true_answer: 2,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/17.jpg',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/Logo.png',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/Logo.png',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/Logo.png',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/Logo.png',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/Logo.png',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
  {
    question: {
      content:
        'Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?',
      image: '/img/Logo.png',
    },
    answer: {
      true_answer: 3,
      description:
        'Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.',
      list: [
        'Phải báo hiệu bằng đèn hoặc còi.',
        'Chỉ được báo hiệu bằng còi.',
        'Phải báo hiệu bằng cả còi và đèn.',
        'Chỉ được báo hiệu bằng đèn.',
      ],
    },
  },
>>>>>>> Stashed changes
];
