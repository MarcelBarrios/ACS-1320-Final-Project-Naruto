import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://narutodb.xyz/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.characters))
            .catch(error => console.error('Error fetching characters:', error));
    }, []);

    return (
        <div className="home-container">
            <h1 className="home-title">Naruto Characters</h1>
            <div className="characters-grid">
                {characters.map(character => (
                    <Link to={`/character/${character.id}`} key={character.id} className="character-card">
                        {character.images && character.images.length > 0 ? (
                            <img src={character.images[0]} alt={character.name} className="character-image" />
                        ) : (
                            <p className="no-image">No image available</p>
                        )}
                        <h2 className="character-name">{character.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );

}

export default Home;
