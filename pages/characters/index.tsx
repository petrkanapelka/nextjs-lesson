import { API } from "../../assets/api/api";
import { CharacterType, ResponseType } from "../../assets/api/rick-and-morty-api";
import { Header } from "../../components/Header/Header";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()

    return {
        props: {
            characters
        }
    }
}

type PropsType = {
    characters: ResponseType<CharacterType>
}

const Characters = (props: PropsType) => {

    const { characters } = props;

    const charactersList = characters.results.map((c) => {
        return (
            <div key={c.id}>{c.name}</div>
        )
    })

    return (
        <PageWrapper>
            <Header />
            {charactersList}
        </PageWrapper>
    );
};

export default Characters;