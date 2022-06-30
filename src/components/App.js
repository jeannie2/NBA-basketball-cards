import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

// const App = () => {
function App() {
  const [data, setData] = useState([]);
  const [team, setTeam] = useState();

  const teamName = team;
  const url =
    "https://nba-players.herokuapp.com/players-stats-teams/" + teamName;
  const getData = async () => {
    try {
      const teamPlayersData = await axios.get(url);
      setData(teamPlayersData.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  // need?
  useEffect(() => {
    getData();
  }); // leave out []? so doesn't run once. [] includes empty dependency array

  /* const dropdownUpdates = (e) => {
    setTeam(e.target.value);
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
  }; */

  return (
    <div>
      <div>
        <select
          id="teams"
          value={team}
          // onChange={(e) => dropdownUpdates(e)} // change backgroundColor + setTeam data
          onChange={(e) => setTeam(e.target.value)}
        >
          <option value="">Select team:</option>
          <option value="bro">Brooklyn Nets</option>
          <option value="lal">Los Angeles Lakers</option>
          <option value="mia">Miami Heat</option>
          <option value="nyk">New York Knicks</option>
        </select>

        <a href="https://nba-players.herokuapp.com/">2017-2018 Season</a>
      </div>

      {data.map((player, index) => (
        <Card
          key={index}
          logo={player.team_acronym}
          avatar={player.name}
          name={player.name}
          team={player.team_name}
          games={player.games_played}
          points={player.points_per_game}
          ftp={player.free_throw_percentage}
          rating={player.player_efficiency_rating}
        />
      ))}
    </div>
  );
}

export default App;

/* 
-didnt es6 everything, not 100% consistent
-another way: 
{contacts.map(createCard)}

function createCard(contact) {
  return (
    <Card
      key={contact.name}
      name={contact.name}
      team={contact.team_name}
      rating={contact.player_efficiency_rating}
    />
  );
}

References: 
-https://www.delftstack.com/howto/react/react-dropdown-select/
-https://forum.freecodecamp.org/t/how-to-use-map-function-in-react-js-with-api/476783
-https://dev.to/redeyemedia/get-requests-in-react-using-async-await-7jd ???
-https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react?
-maybe others eg try catch axios part
*/
