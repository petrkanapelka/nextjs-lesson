"use client";

import { useEffect, useState } from 'react';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { Card } from 'components/Card/Card';
import { EpisodeType } from 'assets/api/rick-and-morty-api';

const Episodes = () => {
    const [episodes, setEpisodes] = useState<EpisodeType[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`);
                if (!response.ok) {
                    throw new Error('Failed to fetch episodes');
                }
                const data = await response.json();
                setEpisodes(data.results || []);
            } catch (err) {
                setError('Failed to fetch episodes');
            } finally {
                setIsLoading(false);
            }
        };

        fetchEpisodes();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <PageWrapper>
            {episodes && episodes.length > 0 ? (
                episodes.map(episode => (
                    <Card key={episode.id} name={episode.name} />
                ))
            ) : (
                <p>No episodes available.</p>
            )}
        </PageWrapper>
    );
};

export default Episodes;
