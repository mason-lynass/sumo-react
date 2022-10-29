import React from "react";

function Header ({viewState, handleFormClick}) {
    return (
        <div>
            <h1>SUMO PRIME TIME</h1>

            <button id="formSwitch" onClick={handleFormClick}>{viewState === false ? "check the scores" : "add your team"}</button>
        </div>
    )
}

export default Header