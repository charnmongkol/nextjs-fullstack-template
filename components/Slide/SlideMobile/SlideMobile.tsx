import styles from './SlideMobile.module.css';

export interface ISlideMobile {
  children: any;
}

const SlideMobile: React.FC<ISlideMobile> = ({ children }) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default SlideMobile;
