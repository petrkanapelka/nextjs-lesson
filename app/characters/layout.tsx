import { BaseLayout } from 'components/BaseLayout/BaseLayout';
import { NextPage } from 'next';
import React, { PropsWithChildren } from 'react';

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <BaseLayout>{children}</BaseLayout>
    );
};

export default Layout;