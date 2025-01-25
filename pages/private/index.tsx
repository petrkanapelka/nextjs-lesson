import { getLayout } from 'components/Layout/BaseLayout/BaseLayout';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import LoginNavigate from 'hoc/LoginNavigate';
import React from 'react';

const PrivatePage = () => {
    return (
        <LoginNavigate>
            <PageWrapper>
                <h1>Private Page</h1>
                <p>This is a private page. Only authorized users can access this page.</p>
            </PageWrapper>
        </LoginNavigate>
    );
};

PrivatePage.getLayout = getLayout

export default PrivatePage;