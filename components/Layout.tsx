import Head from 'next/head';
import { ReactNode } from 'react';

export default function Layout(props: { children : ReactNode }) {
    return (
        <>
            <Head>
                <title>Congress Tracker</title>
                <meta name="description" content="Site to track what's new in Congress" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{props.children}</main>
        </>
    );
}
