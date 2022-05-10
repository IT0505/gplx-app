import styles from './Parallax.module.scss';

export default function Parallax({ className, backgroundImage, children }) {
  return (
    <div
      className={`${styles.parallax} ${className}`}
      style={{
        backgroundImage: `url(${
          backgroundImage.src !== undefined
            ? backgroundImage.src
            : backgroundImage
        })`,
      }}
    >
      {children}
    </div>
  );
}
