import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CharacterDetails.css';

function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://narutodb.xyz/api/character/${id}`);
                const data = await response.json();
                if (data && data.character) {
                    setCharacter(data.character);
                } else {
                    setCharacter(null);
                }
            } catch (error) {
                console.error("Error fetching character details:", error);
                setCharacter(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) {
        return <div className="loading">Loading character details...</div>;
    }

    if (!character) {
        return <div className="error">Character not found.</div>;
    }

    return (
        <div className="character-details-container">
            <h1 className="character-name">{character.name}</h1>
            {character.images && character.images.length > 0 && (
                <img src={character.images[0]} alt={character.name} className="character-image" />
            )}
            <p className="character-description">{character.about || "No description available."}</p>
            <div className="character-info">
                <p><strong>Clan:</strong> {character.clan || 'Unknown'}</p>
                <p><strong>Rank:</strong> {character.rank || 'Unknown'}</p>
                <p><strong>Jutsu:</strong> {character.jutsu && character.jutsu.length > 0 ? character.jutsu.join(', ') : 'None'}</p>
            </div>
        </div>
    );
}

export default CharacterDetails;
