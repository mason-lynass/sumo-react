import React, {useState, useEffect} from "react";

function RikishiCard ({rikishi, handleCardClick, handleAddToTeam}) {
    return (
        <div className="content" onClick={() => handleCardClick(rikishi)}>
            <div className="card-title">
                <h1>{rikishi.shikona}</h1>
                <img src={rikishi.img} alt={rikishi.shikona}></img>
            </div>
            <p>current rank: {rikishi.rank}</p>
            <p>highest rank: {rikishi.highestrank}</p>
            <p>career Yusho: {rikishi.yusho}</p>
            <p>career Kinboshi: {rikishi.kinboshi}</p>
            <p>fantasy sumo points last basho: {rikishi.fsAki}</p>
            <button onClick={() => handleAddToTeam(rikishi)}>Add {rikishi.shikona} to your squad</button>
        </div>
    )
}

export default RikishiCard