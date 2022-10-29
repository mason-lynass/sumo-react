import React, { useState, useEffect } from "react"

function FSTeam({ userTeam, setUserTeam, handleTeamFormChange, handleTeamFormSubmit }) {

    function handleXButton (clicked) {
        let i = clicked.target.id
        const newTeam = {...userTeam}
        newTeam[i] = ""
        setUserTeam(newTeam)
        console.log(i)
        console.log(newTeam)
    }


    console.log(userTeam)

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
                    <p>{userTeam.r1} {userTeam.r1 !== "" ? <button id="r1" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r2} {userTeam.r2 !== "" ? <button id="r2" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r3} {userTeam.r3 !== "" ? <button id="r3" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r4} {userTeam.r4 !== "" ? <button id="r4" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r5} {userTeam.r5 !== "" ? <button id="r5" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r6} {userTeam.r6 !== "" ? <button id="r6" onClick={handleXButton}>x</button> : null}</p>
                    <p>{userTeam.r7} {userTeam.r7 !== "" ? <button id="r7" onClick={handleXButton}>x</button> : null}</p>
                </div>
            </div>
            <div>
                <form id="FSTeamBottom" onSubmit={handleTeamFormSubmit}>
                    <label for="username" name="username">Your name / username / team name:</label>
                    <input type='text' name="username" value={userTeam.username} onChange={handleTeamFormChange}></input>
                    <button type="submit">Submit your team</button>
                </form>
            </div>
        </div>
    )
}

export default FSTeam