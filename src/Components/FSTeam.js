import React, {useState, useEffect} from "react"

function FSTeam ({userTeam, handleTeamFormChange, handleTeamFormSubmit}) {
    return (
        <div id="FSTeam" className="FSTeamContainer">
            <h2>- Build your Fantasy Sumo team -</h2>
            <div id="FSFlex">
                <div>
                    <p>One sanyaku rikishi:</p>
                    <p>One rikishi M1-M4:</p>
                    <p>One rikishi M5-M8:</p>
                    <p>One rikishi M9-M12:</p>
                    <p>One rikishi M13-M17:</p>
                    <p>One extra rikishi any rank:</p>
                    <p>One Juryo rikishi:</p>
                </div>
                <div id="FSRikishi">
                    <p>{userTeam.r1}</p>
                    <p>{userTeam.r2}</p>
                    <p>{userTeam.r3}</p>
                    <p>{userTeam.r4}</p>
                    <p>{userTeam.r5}</p>
                    <p>{userTeam.r6}</p>
                    <p>{userTeam.r7}</p>
                </div>
            </div>
            <div id="FSTeamBottom">
                <form onSubmit={handleTeamFormSubmit}>
                    <label for="username" name="username">Your name / username / team name:</label>
                    <input type='text' name="username" value={userTeam.username} onChange={handleTeamFormChange}></input>
                    <button type="submit">Submit your team</button>
                </form>
            </div>
        </div>
    )
}

export default FSTeam