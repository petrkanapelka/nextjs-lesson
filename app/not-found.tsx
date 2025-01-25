"use client"

import { getLayout } from 'components/Layout/BaseLayout/BaseLayout';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import Link from 'next/link';
import { CSSProperties } from 'react';

const NotFound = () => {
    return (
        <PageWrapper>
            <div style={styles.container}>
                <h1 style={styles.heading}>404 - Page Not Found</h1>
                <p style={styles.text}>
                    Sorry, the page you are looking for does not exist. Go back to{' '}
                    <Link href="/" style={styles.link}>
                        Home
                    </Link>
                    .
                </p>
            </div>
        </PageWrapper>
    );
};

const styles: { [key: string]: CSSProperties } = {
    container: {
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '48px',
        margin: '0 0 20px',
    },
    text: {
        fontSize: '18px',
    },
    link: {
        color: '#0070f3',
        textDecoration: 'underline',
    },
};

NotFound.getLayout = getLayout

export default NotFound;
