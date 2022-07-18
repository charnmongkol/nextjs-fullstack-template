import Primary from '../components/Layouts/Primary/Primary';
import MediaCard from '../components/MediaCard/MediaCard';
import { mockMediaCardProps } from '../components/MediaCard/MediaCard.mocks';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <MediaCard {...mockMediaCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Primary>{page}</Primary>;
};
