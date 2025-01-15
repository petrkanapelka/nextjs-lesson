import { API } from "../../assets/api/api";
import { CharacterType, ResponseType } from "../../assets/api/rick-and-morty-api";
import { CharacterCard } from "../../components/Card/CharacterCard/CharacterCard";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { getLayout } from '../../components/Layout/BaseLayout/BaseLayout';
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

export const getStaticPaths: GetStaticPaths = async () => {
    const { results } = await API.rickAndMorty.getCharacters()

    const paths = results.map((character) => {
        return {
            params: { id: String(character.id) }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    };
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params || {}

    const character = await API.rickAndMorty.getCharacter(id as string)

    if (!character) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            character
        }
    }
}

type PropsType = {
    character: CharacterType
}

const Character = (props: PropsType) => {

    const router = useRouter()

    const { character } = props;

    const characterID = router.query.id

    const onClickHandler = (act: string) => {
        if (characterID) {
            router.push(`/characters/${Number(characterID) + (act === 'next' ? 1 : -1)}`)
        }
    }

    return (
        <PageWrapper>
            <Container>
                <h4>ID: {characterID}</h4>
                <CharacterCard key={character.id} character={character} />
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button onClick={() => { onClickHandler('prev') }}>Prev character</Button>
                    <Button onClick={() => { onClickHandler('next') }}>Next character</Button>
                </div>
            </Container>
        </PageWrapper>
    );
};

Character.getLayout = getLayout

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
`

const Button = styled.button`
    width: 200px;
    height: 40px;
    background-color: #ed9ded;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: violet;
    }
`

export default Character;