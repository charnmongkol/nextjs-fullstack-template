import styles from './BoxMobile.module.css';

export interface IBoxMobile {
  title: string;
  text: string;
  num: string;
  borderColor: string;
  bgColor: string;
}

const BoxMobile: React.FC<IBoxMobile> = ({
  title,
  text,
  num,
  borderColor,
  bgColor,
}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `${bgColor}`, paddingInline: '5%' }}
    >
      {/* title */}
      <div className="flex items-center mb-5 gap-2">
        <div>
          <div
            className={styles.num}
            style={{ color: bgColor == '#090C35' ? '#8F6BE8' : '#000000' }}
          >
            {num}
          </div>
          <div
            className={styles.borderNum}
            style={{ backgroundColor: `${borderColor}` }}
          ></div>
        </div>
        <div>
          <h5 className={styles.title}>{title}</h5>
        </div>
      </div>
      {/* text */}
      <div
        className={`${styles.text} pb-14 ${
          bgColor == '#5E3DB3' || bgColor == '#090C35'
            ? 'text-white'
            : 'text-black'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default BoxMobile;
