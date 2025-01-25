import React, { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

const LoginNavigate: FC<PropsWithChildren<{}>> = ({ children }) => {
    const router = useRouter()

    const isAuth = true;

    if (!isAuth) router.push('/testing')
    return (
        <div>
            {children}
        </div>
    );
};

export default LoginNavigate;