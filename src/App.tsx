import React, {useEffect, useState} from 'react';
import './App.css';
import {Character} from "./model/Character";
import CharacterGallery from "./component/CharacterGallery";
import axios from "axios";
import {Link, Route, Routes} from "react-router-dom";
import CharacterDetailsPage from "./component/CharacterDetailsPage";
import {Episode} from "./model/Episode";
import EpisodeGallery from "./component/EpisodeGallery";
import EpisodeDetailsPage from "./component/EpisodeDetailsPage";

function App() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    function fetchAllCharacters(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function fetchAllEpisodes(){
        axios.get("https://rickandmortyapi.com/api/episode")
            .then((response) => {
                setEpisodes(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchAllCharacters();
        fetchAllEpisodes();
    }, []);

    return (
        <div className="App">
            <h1>The one and only Rick and Morty Gallery</h1>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/characters"}>Characters</Link></li>
                    <li><Link to={"/episodes"}>Episodes</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path={"/characters"} element={<CharacterGallery characters={characters} />} />
                <Route path={"/characters/:id"} element={<CharacterDetailsPage />} />
                <Route path={"/episodes"} element={<EpisodeGallery episodes={episodes} />} />
                <Route path={"/episodes/:id"} element={<EpisodeDetailsPage />} />
            </Routes>
        </div>
    );
}

export default App;
