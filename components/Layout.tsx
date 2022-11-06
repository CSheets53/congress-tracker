import Head from 'next/head';
import { ReactNode } from 'react';
import styles from 'styles/Home.module.css';

export default function Layout(props: { children : ReactNode }) {
    return (
        <>
            <Head>
                <title>Congress Tracker</title>
                <meta name="description" content="Site to track what's new in Congress" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>{props.children}</main>
        </>
    );
}
