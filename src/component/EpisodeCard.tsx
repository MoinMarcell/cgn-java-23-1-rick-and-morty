import {useNavigate} from "react-router-dom";
import {Episode} from "../model/Episode";
import "./CharacterCard.css";

type EpisodeCardProps = {
    episode: Episode,
}

export default function EpisodeCard(props: EpisodeCardProps){

    const navigate = useNavigate();

    function handleCardClick(){
        navigate("/episodes/" + props.episode.id);
    }

    return(
        <section className={"character-card"} onClick={handleCardClick} style={{cursor: "pointer"}}>
            <h2 className={"character-card-name"}>{props.episode.name}</h2>
            <p className={"character-card-status"}>{props.episode.air_date}</p>
        </section>
    );
}