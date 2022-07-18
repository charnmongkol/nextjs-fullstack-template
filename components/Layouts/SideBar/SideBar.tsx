import Link from 'next/link';
import styles from './Sidebar.module.css';

export interface ISideBar {
  sampleTextProp: string;
}

const SideBar: React.FC<ISideBar> = ({ sampleTextProp }) => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default SideBar;
