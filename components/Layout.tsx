import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout(props: { children : ReactNode }) {
    return (
        <>
            <Head>
                <title>Congress Tracker</title>
                <meta name="description" content="Site to track what's new in Congress" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Link href="/">Home</Link>
            </div>
            <main>{props.children}</main>
        </>
    );
}
