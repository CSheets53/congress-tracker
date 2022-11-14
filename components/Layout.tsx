import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode,
};

export default function Layout({ children }: LayoutProps) {
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
            <main>{children}</main>
        </>
    );
}
