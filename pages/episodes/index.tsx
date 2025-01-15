import { API } from "../../assets/api/api";
import { CharacterType, EpisodeType, ResponseType } from "../../assets/api/rick-and-morty-api";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes()

    if (!episodes) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            episodes
        }
    }
}

type PropsType = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: PropsType) => {

    const { episodes } = props;

    const episodesList = episodes.results.map((e) => {
        return (
            <Card key={e.id} name={e.name} />
        )
    })

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    );
};

Episodes.getLayout = getLayout

export default Episodes;