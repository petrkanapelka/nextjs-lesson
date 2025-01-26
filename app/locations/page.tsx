"use client";

import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { Card } from 'components/Card/Card';
import { useEffect, useState } from 'react';
import { API } from 'assets/api/api';
import { LocationType } from 'assets/api/rick-and-morty-api';

const Locations = () => {
    const [locations, setLocations] = useState<LocationType[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        API.rickAndMorty.getLocations()
            .then(res => setLocations(res.results))
            .catch(() => setError('Failed to fetch locations'))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <PageWrapper>
            {locations && locations.length > 0 ? (
                locations.map(location => (
                    <Card key={location.id} name={location.name} />
                ))
            ) : (
                <p>No locations available.</p>
            )}
        </PageWrapper>
    );
};

export default Locations;
