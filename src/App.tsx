import React, {useState} from 'react';
import './App.css';
import {Character} from "./model/Character";
import Characters from "./characters.json"
import CharacterGallery from "./component/CharacterGallery";
import SearchCharacter from "./component/SearchCharacter";

function App() {

    const characters: Character[] = Characters;
    const [searchText, setSearchText] = useState<string>("");

    function handleSearchText(searchText: string) {
        setSearchText(searchText);
    }

    const filteredCharacters = characters.filter((character) =>
        character
            .name
            .toLowerCase()
            .includes(searchText.toLowerCase())
        ||
        character
            .status
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );

    return (
        <div className="App">
            <h1>The one and only Rick and Morty Gallery</h1>
            Search: <SearchCharacter searchText={handleSearchText}/>
            {
                filteredCharacters.length > 0 ?
                    <CharacterGallery characters={filteredCharacters}/> :
                    <div>
                        <p>No Characters found :(</p>
                        <img
                            src={"https://media0.giphy.com/media/uB6zoKcZUMgKY/giphy.gif?cid=ecf05e4764ewl4o8fiu1b5cmtiz09yfpgqg6dzt2da70dp8c&rid=giphy.gif&ct=g"}
                            alt={"Cry me a river"}
                        />
                    </div>
            }

        </div>
    );
}

export default App;
