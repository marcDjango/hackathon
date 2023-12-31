import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOptions } from "../contexts/PlayerContext";
import "./AddPlayerPage.scss";

function AddPlayerPage() {
  const { limit, setPlayers } = useOptions();

  const navigate = useNavigate();

  const [playersData, setPlayersData] = useState(
    Array.from({ length: limit }, () => ({ name: "", points: 0 }))
  );

  const handleInputChange = (index, fieldName, value) => {
    const newPlayersData = [...playersData];
    newPlayersData[index][fieldName] = value;
    setPlayersData(newPlayersData);
  };

  const handleClick = () => {
    const filteredPlayers = playersData.filter(
      (player) => player.name.trim() !== ""
    );
    setPlayers(filteredPlayers);
    navigate(`/roue`);
  };

  useEffect(() => {
    if (!limit) {
      navigate("/");
    }
  }, []);

  return (
    <div className="addplayerpage-container">
      <div className="addplayerpage-players">
        {playersData.map((player, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <label>Joueur {index + 1}</label>
            <input
              type="text"
              placeholder={`Prenom joueur ${index + 1}`}
              className="addplayerpage-input"
              value={player.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
          </div>
        ))}
      </div>
      <button
        className="addplayerpage-button"
        type="button"
        onClick={handleClick}
        disabled={playersData.some((player) => player.name.trim() === "")}
      >
        Validation
      </button>
    </div>
  );
}

export default AddPlayerPage;
