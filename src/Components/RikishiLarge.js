import React, { useEffect, useState } from "react"
import RikishiCard from "./RikishiCard"

function RikishiLarge({clickedRikishi, handleAddToTeam}) {
    
    return (
        <div className="RLarge">
            {clickedRikishi ? 
            <RikishiCard rikishi={clickedRikishi} handleAddToTeam={handleAddToTeam} />:
            <>
                <h2>click on a wrestler</h2>
                <p>their information and stats will show up here</p>
            </>}
        </div>
    )
}

export default RikishiLarge