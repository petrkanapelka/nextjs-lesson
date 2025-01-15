import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { useEffect } from 'react';

export const useLoader = () => {
    const router = useRouter();

    useEffect(() => {
        const startLoading = () => nProgress.start();
        const doneLoading = () => nProgress.done();

        router.events.on('routeChangeStart', startLoading);
        router.events.on('routeChangeComplete', doneLoading);
        router.events.on('routeChangeError', doneLoading);

        return () => {
            router.events.off('routeChangeStart', startLoading);
            router.events.off('routeChangeComplete', doneLoading);
            router.events.off('routeChangeError', doneLoading);
        };
    }, [router]);
};
