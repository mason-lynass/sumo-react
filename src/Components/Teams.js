import React, {useState, useEffect} from 'react'
import OneTeam from "./OneTeam"

function Teams ({teams}) {
    
    return (
        <div className='teamsContainer'>
            <div className='teamsTop'>
                <h2>team name</h2>
                <p>sanyaku</p>
                <p>M1-M4</p>
                <p>M5-M8</p>
                <p>M9-M12</p>
                <p>M13-M17</p>
                <p>extra</p>
                <p>juryo</p>
            </div>
        {teams.map((team) => 
            <OneTeam team={team} key={team.id}/>
        )}
        </div>
    )
}

export default Teams