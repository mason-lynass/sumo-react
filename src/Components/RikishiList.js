import React from "react";
import RikishiCard from "./RikishiCard";
import ScrollCard from "./ScrollCard";

function RikishiList ({rikishi, handleCardClick}) {
    return (
        <div id='addedRikishiList' className="cards">
            {rikishi.map((rikishi) => 
            <ScrollCard 
            key={rikishi.id} 
            rikishi={rikishi}
            handleCardClick={handleCardClick}
            />)}
        </div>
    )
}

export default RikishiList