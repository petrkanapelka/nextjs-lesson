"use client"

import { EpisodeType, ResponseType } from 'assets/api/rick-and-morty-api';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { Card } from 'components/Card/Card';
import { notFound } from 'next/navigation';

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`, {
        next: { revalidate: 60 }
    });

    return await res.json();
};

export default async function Episodes() {
    const { results } = await getEpisodes();

    if (!results) {
        notFound();
    }

    const episodesList = results.map(episode => (
        <Card key={episode.id} name={episode.name} />
    ));

    return (
        <PageWrapper>
            {results.length ? episodesList : 'Nothing found'}
        </PageWrapper>
    );
}
