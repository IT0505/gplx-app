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

export const listQuestion = [
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/14.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi. Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/15.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/16.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "",
    },
    ans: {
      true_ans: 2,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/17.jpg",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/Logo.png",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/Logo.png",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/Logo.png",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/Logo.png",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/Logo.png",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
  {
    question: {
      content: "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
      image: "/img/Logo.png",
    },
    ans: {
      true_ans: 3,
      description: "Điều 14 Luật Giao thông đường bộ 2008; - Nghị định 46 năm 2016 quy định. Vượt xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
      list: [
        "Phải báo hiệu bằng đèn hoặc còi.",
        "Chỉ được báo hiệu bằng còi.",
        "Phải báo hiệu bằng cả còi và đèn.",
        "Chỉ được báo hiệu bằng đèn.",
      ]
    },
  },
];
