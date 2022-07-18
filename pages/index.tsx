import Link from 'next/link';
import Primary from '../components/Layouts/Primary/Primary';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Greetings, the inspector. </h1>
      <h3 className="text-3xl mt-4 px-3">
        My name is{' '}
        <a
          className="text-pink-500"
          href="https://drive.google.com/file/d/1hQ-7IQK8EetiwCqc1p8JUuyDJBSqnPJz/view"
          target="__blank"
        >
          Charnmongkol Somsup
        </a>
        , a candidates of a frontend developer position
      </h3>

      <table className="shadow-lg bg-white border my-5">
        <tr>
          <th className="bg-blue-400 border text-left px-8 py-4">Issue</th>
          <th className="bg-blue-400 border text-left px-8 py-4">Link</th>
        </tr>
        <tr>
          <td className="border px-8 py-4">Test Page</td>
          <td className="border px-8 py-4 text-pink-500">
            <Link href="/about">My Result</Link>
          </td>
        </tr>
        <tr>
          <td className="border px-8 py-4">Git Repository</td>
          <td className="border px-8 py-4 text-pink-500">
            <a
              href="https://github.com/charnmongkol/nextjs-fullstack-template"
              target="__blank"
            >
              My souce code
            </a>
          </td>
        </tr>
        <tr>
          <td className="border px-8 py-4">CV</td>
          <td className="border px-8 py-4">
            <a
              className="text-pink-500"
              href="https://drive.google.com/file/d/1hQ-7IQK8EetiwCqc1p8JUuyDJBSqnPJz/view"
              target="__blank"
            >
              Charnmongkol Somsup
            </a>
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Primary>{page}</Primary>;
};
