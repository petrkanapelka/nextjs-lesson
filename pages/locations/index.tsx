import { useQuery } from "@tanstack/react-query";
import { API } from "../../assets/api/api";
import { CharacterType, LocationType, ResponseType } from "../../assets/api/rick-and-morty-api";
import { Header } from "../../components/Header/Header";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET'
    }).then(res => res.json())
}

const Locations = () => {

    const { data: locations } = useQuery<ResponseType<LocationType>>(['locations'], getLocations)

    if (!locations) return null

    const locationsList = locations.results.map((l) => {
        return (
            <div key={l.id}>{l.name}</div>
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