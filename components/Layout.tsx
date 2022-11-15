import Head from 'next/head';
import { ReactNode } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/members">Members</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <main>{children}</main>
        </>
    );
}
