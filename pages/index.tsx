import Head from 'next/head';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Congress Tracker</title>
        <meta name="description" content="Site to track what's new in Congress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Congress Tracker</h1>
      </main>
    </div>
  )
}
