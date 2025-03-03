import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharacterDetails.css";

function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                console.log(`Fetching character with ID: ${id}`); // Debugging
                const response = await fetch(`https://narutodb.xyz/api/character/${id}`);
                const data = await response.json();
                console.log("API Response:", data); // Debugging

                if (data) {
                    setCharacter(data);
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

    // Extract data safely
    const clan = character.personal?.clan || "Unknown";
    const rank = character.rank?.ninjaRank
        ? Object.values(character.rank.ninjaRank).join(", ")
        : "Unknown";

    return (
        <div className="character-details-container">
            <h1 className="character-name-details">{character.name}</h1>
            {character.images && character.images.length > 0 ? (
                <img src={character.images[0]} alt={character.name} className="character-image" />
            ) : (
                <p>No images available</p>
            )}
            <p className="character-appearance">
                Manga appearance: {character.debut?.manga || "No appearance yet."}
            </p>
            <div className="character-info">
                <p><strong>Clan:</strong> {clan}</p>
                <p><strong>Rank:</strong> {rank}</p>
                <p><strong>Jutsu:</strong> {character.jutsu && character.jutsu.length > 0 ? character.jutsu.join(", ") : "None"}</p>
            </div>
        </div>
    );

}

export default CharacterDetails;
