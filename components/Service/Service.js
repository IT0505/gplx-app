import ServiceItem from './components/ServiceItem/ServiceItem';
import styles from './Service.module.scss';

const MDService = {
  mainContent: [
    {
      faClass: 'fa-solid fa-graduation-cap',
      title: 'Ôn tập',
      description:
        'Lựa chọn một trong 4 nhóm câu hỏi để ôn tập dưới dạng trắc nghiệm',
    },
    {
      faClass: 'fa-solid fa-graduation-cap',
      title: 'Thi thử',
      description:
        'Lựa chọn một trong 8 bộ đề để thi thử dưới dạng trắc nghiệm',
    },
    {
      faClass: 'fa-solid fa-graduation-cap',
      title: 'Ôn lại',
      description: 'Ôn tập lại những câu hỏi  bạn cảm thấy khó nhớ',
    },
  ],
};

export default function Service() {
  const { mainContent } = MDService;
  return (
    <div className={styles.service}>
      <div className='container'>
        <div className={styles.serviceInner}>
          {mainContent.map((item, index) => (
            <ServiceItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
