import Head from 'next/head';
import styles from './Primary.module.css';

export interface IPrimary {
  children: any;
}

const Primary: React.FC<IPrimary> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Test Tri Petch IT Solutions</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Primary;
