import React from 'react';

export const metadata = {
    title: 'My Next.js App',
    description: 'A simple Next.js application',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;