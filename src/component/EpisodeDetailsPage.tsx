import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Episode} from "../model/Episode";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeDetailsPage(){
    const [episode, setEpisode] = useState<Episode>();

    const params = useParams();

    const id: string | undefined = params.id;

    function fetchSingleCharacterById(id: string) {
        axios.get("https://rickandmortyapi.com/api/episode/" + id)
            .then((response) => {
                setEpisode(response.data);
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

    const characters = episode?.characters.map((character) => {
        const id: string[] = character.split("/").slice(-1);
        return(
            <li>
                <Link to={"/characters/" + id}>
                    Character: {id}
                </Link>
            </li>
        );
    })

    return (
        <div>
            {
                episode ? <EpisodeCard episode={episode}/> : <p>Not Found :(</p>
            }
            <ul>
                {characters}
            </ul>
        </div>
    );
}