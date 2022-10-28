import React from "react";

function Header ({formState, handleFormClick}) {
    return (
        <div>
            <h1>SUMO PRIME TIME</h1>
            {/* <button id="formSwitch" onClick={handleFormClick}>{formState === false ? "add a rikishi to the DB" : "back to home"}</button> */}
        </div>
    )
}

export default Header