import CharacterCard from "./CharacterCard";
import {Link, useParams} from "react-router-dom";
import {Character} from "../model/Character";
import axios from "axios";
import {useEffect, useState} from "react";

export default function CharacterDetailsPage() {

    const [character, setCharacter] = useState<Character>();

    const params = useParams();

    const id: string | undefined = params.id;

    function fetchSingleCharacterById(id: string) {
        axios.get("https://rickandmortyapi.com/api/character/" + id)
            .then((response) => {
                setCharacter(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        if (id) {
            fetchSingleCharacterById(id);
        }
    }, [id]);

    const episodes = character?.episode.map((episode) => {
        return (
            <li><Link to={"/episodes/" + episode.split("/").slice(-1)}>Episode: {episode.split("/").slice(-1)}</Link></li>
        );
    })

    return (
        <div>
            {
                character ?
                    <CharacterCard character={character}/> : <p>Not Found :(</p>
            }
            <ul>
                {episodes}
            </ul>
        </div>
    );
}