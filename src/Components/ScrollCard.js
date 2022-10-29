import React from "react";

function ScrollCard({ rikishi, handleCardClick }) {
    return (
        <div className="ScrollCard" onClick={() => handleCardClick(rikishi)}>
            <img src={rikishi.img} alt={rikishi.shikona}></img>
            <h2>{rikishi.shikona}</h2>
            <h3>{rikishi.rank}</h3>
        </div>
    )
}

export default ScrollCard