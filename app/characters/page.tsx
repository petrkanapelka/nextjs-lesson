"use client";

import { useEffect, useState } from 'react';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import dynamic from "next/dynamic";
import { CharacterType } from '../../assets/api/rick-and-morty-api';

const CharacterCard = dynamic(() =>
    import('../../components/Card/CharacterCard/CharacterCard').then(mod => mod.CharacterCard),
    { ssr: false }
);

const Characters = () => {
    const [characters, setCharacters] = useState<CharacterType[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`);
                if (!response.ok) {
                    throw new Error('Failed to fetch characters');
                }
                const data = await response.json();
                setCharacters(data.results || []);
            } catch (err) {
                setError('Failed to fetch characters');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <PageWrapper>
            {characters && characters.length > 0 ? (
                characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))
            ) : (
                <p>No characters available.</p>
            )}
        </PageWrapper>
    );
};

export default Characters;
