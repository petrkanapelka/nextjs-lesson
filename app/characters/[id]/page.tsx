"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { CharacterCard } from "components/Card/CharacterCard/CharacterCard";
import { CharacterType } from "assets/api/rick-and-morty-api";

const Character = () => {
    const [character, setCharacter] = useState<CharacterType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false); // Client-side check state

    useEffect(() => {
        setIsClient(true); // Set to true once the component is mounted on the client
    }, []);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchCharacter = async () => {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character/${id}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch character");
                    }
                    const data = await response.json();
                    setCharacter(data);
                } catch (err) {
                    setError("Character not found");
                } finally {
                    setIsLoading(false);
                }
            };

            fetchCharacter();
        }
    }, [id]);

    const onClickHandler = (action: "prev" | "next") => {
        if (id) {
            const newID = action === "next" ? Number(id) + 1 : Number(id) - 1;
            router.push(`/characters/${newID}`);
        }
    };

    if (!isClient) return null; // Prevent rendering the component on the server

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <PageWrapper>
            <div className="character-container">
                <h4>ID: {id}</h4>
                {character && <CharacterCard character={character} />}
                <div className="button-container">
                    <button className="action-button" onClick={() => onClickHandler("prev")}>
                        Prev character
                    </button>
                    <button className="action-button" onClick={() => onClickHandler("next")}>
                        Next character
                    </button>
                </div>
            </div>
            <style jsx>{`
                .character-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    row-gap: 10px;
                }
                .button-container {
                    display: flex;
                    gap: 10px;
                }
                .action-button {
                    width: 200px;
                    height: 40px;
                    background-color: #ed9ded;
                    border-radius: 10px;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .action-button:hover {
                    background-color: violet;
                }
            `}</style>
        </PageWrapper>
    );
};

export default Character;
