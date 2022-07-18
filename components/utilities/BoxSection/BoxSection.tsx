import styles from './BoxSection.module.css';

export interface IBoxSection {
  header: string;
  title: string;
  text: string;
  num: string;
  borderColor: string;
  bgColor: string;
}

const BoxSection: React.FC<IBoxSection> = ({
  header,
  title,
  text,
  num,
  borderColor,
  bgColor,
}) => {
  return (
    <div
      className={styles.flexbox}
      style={{ backgroundColor: `${bgColor}`, paddingInline: '5%' }}
    >
      <div className="md:w-6/12 xs:w-5/12"></div>
      <div className={`${styles.flexboxColumn} md:w-6/12 xs:w-7/12`}>
        {/* header */}
        {header ? (
          <div className="mb-12 pt-20">
            <h1 className={styles.header}>{header}</h1>
          </div>
        ) : null}
        {/* title */}
        <div
          className={`${styles.flexbox} mb-5 gap-2 ${!header ? 'pt-14' : ''}`}
        >
          <div>
            <div className={styles.num}>{num}</div>
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
            bgColor == '#5E3DB3' ? 'text-white' : 'text-black'
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
