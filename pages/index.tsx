import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';
import Layout from 'components/Layout';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Congress Tracker</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
}

export default Home;
