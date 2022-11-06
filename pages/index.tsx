import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';
import styles from 'styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Congress Tracker</h1>
      <Link href="/members">Members</Link>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
}

export default Home;
