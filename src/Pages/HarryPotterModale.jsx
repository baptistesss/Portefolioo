import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/HarryPotterModale.css";
import sport from "../assets/sport.png";

const houseDetails = {
  Gryffindor: {
    image: {},
    description:
      "Les membres de Gryffondor sont connus pour leur courage, leur bravoure et leur détermination.",
  },
  Slytherin: {
    image: {},
    description:
      "Les membres de Serpentard sont connus pour leur ambition, leur ruse et leur détermination à réussir.",
  },
  Hufflepuff: {
    image: {},
    description:
      "Les membres de Poufsouffle sont connus pour leur loyauté, leur patience et leur travail acharné.",
  },
  Ravenclaw: {
    image: {},
    description:
      "Les membres de Serdaigle sont connus pour leur sagesse, leur intelligence et leur amour de l'apprentissage.",
  },
};
const HarryPotterModale = () => {
  const [charactersByHouse, setCharactersByHouse] = useState({
    Gryffindor: [],
    Slytherin: [],
    Hufflepuff: [],
    Ravenclaw: [],
  });
  const [loading, setLoading] = useState(true);
  const [expandedHouse, setExpandedHouse] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.onrender.com/api/characters"
        );
        const charactersData = response.data;

        const isValidImage = (url) => url && url !== "";

        const gryffindorCharacters = charactersData.filter(
          (character) =>
            character.house === "Gryffindor" && isValidImage(character.image)
        );
        const slytherinCharacters = charactersData.filter(
          (character) =>
            character.house === "Slytherin" && isValidImage(character.image)
        );
        const hufflepuffCharacters = charactersData.filter(
          (character) =>
            character.house === "Hufflepuff" && isValidImage(character.image)
        );
        const ravenclawCharacters = charactersData.filter(
          (character) =>
            character.house === "Ravenclaw" && isValidImage(character.image)
        );

        setCharactersByHouse({
          Gryffindor: gryffindorCharacters.slice(0, 5),
          Slytherin: slytherinCharacters.slice(0, 5),
          Hufflepuff: hufflepuffCharacters.slice(0, 5),
          Ravenclaw: ravenclawCharacters.slice(0, 5),
        });
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleClickHouse = (house) => {
    setExpandedHouse(expandedHouse === house ? null : house);
  };

  const handleClickCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Découvrir le monde d'Harry Potter</h1>
      <h3>Choisi ton camps</h3>
      <p className="hp-desc">
        Le monde de Harry Potter, créé par l'auteure britannique J.K. Rowling,
        est un univers riche et fascinant qui a captivé des millions de lecteurs
        et de spectateurs à travers le monde. Cette série de sept romans,
        adaptée en huit films, plonge ses fans dans un monde magique parallèle
        au nôtre, peuplé de sorciers, de créatures fantastiques et d'objets
        enchantés. L'histoire suit les aventures de Harry Potter, un jeune
        sorcier orphelin qui découvre à l'âge de 11 ans qu'il est un sorcier et
        qu'il a été accepté à l'école de sorcellerie de Poudlard. Il y fait la
        connaissance de ses meilleurs amis, Ron Weasley et Hermione Granger,
        avec qui il va affronter de nombreux défis tout au long de sa scolarité
      </p>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="house-container">
        {Object.keys(houseDetails).map(
          (house) =>
            (expandedHouse === null || expandedHouse === house) && (
              <div
                key={house}
                className="house-card"
                onClick={() => handleClickHouse(house)}
              >
                <img
                  src={houseDetails[house].image}
                  alt={house}
                  className="house-image"
                />
                <h2 className="house-title">{house}</h2>
                <p className="house-description">
                  {houseDetails[house].description}
                </p>
                {expandedHouse === house && (
                  <ul className="character-list">
                    {charactersByHouse[house].map((character) => (
                      <li
                        key={character.name}
                        className="character-item"
                        onClick={() => handleClickCharacter(character)}
                      >
                        <h3>{character.name}</h3>
                        <img
                          src={character.image}
                          alt={character.name}
                          className="character-image"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
        )}
      </div>

      {selectedCharacter && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              Fermer
            </button>
            <h2>{selectedCharacter.name}</h2>
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              className="character-image"
            />
            <p>
              <strong>Species:</strong> {selectedCharacter.species}
            </p>
            <p>
              <strong>Gender:</strong> {selectedCharacter.gender}
            </p>
            <p>
              <strong>House:</strong> {selectedCharacter.house}
            </p>
            <p>
              <strong>Date of Birth:</strong> {selectedCharacter.dateOfBirth}
            </p>
            <p>
              <strong>Ancestry:</strong> {selectedCharacter.ancestry}
            </p>
            <p>
              <strong>Actor:</strong> {selectedCharacter.actor}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HarryPotterModale;
