import {Episode} from "../model/Episode";
import EpisodeCard from "./EpisodeCard";
import "./CharacterGallery.css";

type EpisodeGalleryProps = {
    episodes: Episode[],
}

export default function EpisodeGallery(props: EpisodeGalleryProps){

    const episodeCard = props.episodes.map((episode) => {
        return (
            <EpisodeCard episode={episode} key={episode.id + " " + episode.name}/>
        );
    });

    return(
        <div className={"character-gallery"}>
            {episodeCard}
        </div>
    );
}