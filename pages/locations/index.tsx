import { dehydrate, hydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { API } from "../../assets/api/api";
import { CharacterType, LocationType, ResponseType } from "../../assets/api/rick-and-morty-api";
import { Header } from "../../components/Header/Header";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Card } from "../../components/Card/Card";

const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET'
    }).then(res => res.json())
}

export const getStaticProps = async () => {

    const queryClient = new QueryClient()

    await queryClient.fetchQuery(['locations'], getLocations)

    return {
        props: {
            dehydrateState: dehydrate(queryClient)
        }
    }
}

const Locations = () => {

    const { data: locations } = useQuery<ResponseType<LocationType>>(['locations'], getLocations)

    if (!locations) return null

    const locationsList = locations.results.map((l) => {
        return (
            <Card key={l.id} name={l.name} />
        )
    })

    return (
        <PageWrapper>
            <Header />
            {locationsList}
        </PageWrapper>
    );
};

export default Locations;