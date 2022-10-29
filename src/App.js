import React, {useState, useEffect} from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RikishiList from './Components/RikishiList';
import RikishiForm from './Components/RikishiForm';
import RikishiLarge from "./Components/RikishiLarge";
import ScrollCard from "./Components/ScrollCard";
import Header from './Components/Header';
import FSTeam from "./Components/FSTeam";
import Teams from "./Components/Teams"


function App() {
  
  const [rikishi, setRikishi] = useState([])
  const [viewState, setViewState] = useState(false)
  const [clickedRikishi, setClickedRikishi] = useState()
  const [teams, setTeams] = useState([])
  const [userTeam, setUserTeam] = useState({
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    r6: "",
    r7: "",
    username: ""
  })

    useEffect(() => {
        fetch('http://localhost:4001/teams')
        .then(r => r.json())
        .then((teams) => setTeams(teams))
    }, [])
  

  useEffect(() => {
    fetch('http://localhost:4000/wrestlers')
    .then(r => r.json())
    .then(setRikishi)
  }, [])

  function handleFormClick () {
    setViewState(!viewState)
  }

  function handleFormSubmit(newRikishi) {
    setRikishi([...rikishi, newRikishi])
  }

  function handleTeamFormChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserTeam({...userTeam, [name]: value})
  }

  function handleTeamFormSubmit(e) {
    console.log('submitted!')
    fetch(`http://localhost:4001/teams`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userTeam)
    })
    .then(r => r.json())
    .then((newTeam) => setTeams([...teams, newTeam]))
    }


  function handleCardClick(clickedCard) {
    setClickedRikishi(clickedCard)
  }

  function handleAddToTeam(rikishi) {
    if (rikishi.rank === "Y" || rikishi.rank === "O" || rikishi.rank === "S" || rikishi.rank === "K") {
      if (userTeam.r1 === "") {
      setUserTeam({...userTeam, r1: rikishi.shikona})
    } else if (userTeam.r1 !== "") {
      setUserTeam({...userTeam, r6 : rikishi.shikona})
    }}
    if (rikishi.rank === "M1" || rikishi.rank === "M2" || rikishi.rank === "M3" || rikishi.rank === "M4") {
      if (userTeam.r2 === "") {
        setUserTeam({...userTeam, r2: rikishi.shikona})
      } else if (userTeam.r2 !== "") {
        setUserTeam({...userTeam, r6 : rikishi.shikona})
      }}
    if (rikishi.rank === "M5" || rikishi.rank === "M6" || rikishi.rank === "M7" || rikishi.rank === "M8") {
      if (userTeam.r3 === "") {
        setUserTeam({...userTeam, r3: rikishi.shikona})
      } else if (userTeam.r3 !== "") {
        setUserTeam({...userTeam, r6 : rikishi.shikona})
      }} 
    if (rikishi.rank === "M9" || rikishi.rank === "M10" || rikishi.rank === "M11" || rikishi.rank === "M12") {
      if (userTeam.r4 === "") {
        setUserTeam({...userTeam, r4: rikishi.shikona})
      } else if (userTeam.r4 !== "") {
        setUserTeam({...userTeam, r6 : rikishi.shikona})
      }}
    if (rikishi.rank === "M13" || rikishi.rank === "M14" || rikishi.rank === "M15" || rikishi.rank === "M16" || rikishi.rank === "M17") {
      if (userTeam.r5 === "") {
        setUserTeam({...userTeam, r5: rikishi.shikona})
      } else if (userTeam.r5 !== "") {
        setUserTeam({...userTeam, r6 : rikishi.shikona})
      }}
    if (rikishi.rank === "J") {
      setUserTeam({...userTeam, r7: rikishi.shikona})}
  }
  
  
  return (
    <div className="App">
      <Header viewState={viewState} handleFormClick={handleFormClick}/>
      {viewState === true ?
        // <RikishiForm onFormSubmit={handleFormSubmit} /> 
        <Teams teams={teams}/>:
        <div>
          <div className="mainFlex">
            <FSTeam userTeam={userTeam} setUserTeam={setUserTeam} handleTeamFormChange={handleTeamFormChange} handleTeamFormSubmit={handleTeamFormSubmit}/>
            <RikishiLarge clickedRikishi={clickedRikishi} handleAddToTeam={handleAddToTeam} handleCardClick={handleCardClick}/>
          </div>
        <RikishiList rikishi={rikishi} handleCardClick={handleCardClick}/>
        </div>
        }
    </div>
  );
}

export default App;
