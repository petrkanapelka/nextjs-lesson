import Image from 'next/image';
import { PageWrapper } from '../components/PageWrapper/PageWrapper';
import { NextPageWithLayout } from 'pages/_app';

const Home: NextPageWithLayout = () => (
    <PageWrapper>
        <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
        />
    </PageWrapper>
);


export default Home;
