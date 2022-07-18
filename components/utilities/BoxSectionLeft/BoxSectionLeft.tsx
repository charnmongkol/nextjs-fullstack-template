import styles from './BoxSectionLeft.module.css';

export interface IBoxSectionLeft {
  header: string;
  title: string;
  text: string;
  num: string;
  borderColor: string;
  bgColor: string;
}

const BoxSectionLeft: React.FC<IBoxSectionLeft> = ({
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
      style={{ backgroundColor: `${bgColor}`, paddingInline: '10%' }}
    >
      <div className={`${styles.flexboxColumn} md:w-6/12 xs:w-7/12`}>
        {/* header */}
        {header ? (
          <div className="mb-12 pt-32">
            <h1 className={styles.header}>{header}</h1>
          </div>
        ) : null}
        {/* title */}
        <div
          className={`${styles.flexbox} mb-5 gap-2 ${!header ? 'pt-14' : ''}`}
        >
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
            bgColor == '#090C35' ? 'text-white' : 'text-black'
          }`}
        >
          {text}
        </div>
      </div>
      <div className="md:w-6/12 xs:w-5/12"></div>
    </div>
  );
};

export default BoxSectionLeft;
