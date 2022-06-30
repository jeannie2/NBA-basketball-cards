import React from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";
// import Tilt from "react-tilt";

function Card(props) {
  return (
    <div className="flip-card">
      <div className="inner">
        <div className={`front ${props.logo}`}>
          <Logo logo={props.logo} />
        </div>
        <div className={`back ${props.logo}`}>
          <div className="upper">
            <Avatar id="headshot" avatar={props.avatar} />
          </div>

          <div className="container">
            <p>
              Name: {"\u00A0"}
              <span style={{ textTransform: "uppercase" }}>
                {props.name}{" "}
              </span>{" "}
              <br />
              Team: {"\u00A0"}
              <span style={{ textTransform: "uppercase" }}>
                {props.team}{" "}
              </span>{" "}
              <br />
              Games played: {"\u00A0"}
              <span> {props.games} </span> <br />
              Points per game: {"\u00A0"}
              <span> {props.points} </span> <br />
              Free throw percentage: {"\u00A0"}
              <span> {props.ftp} </span> <br />
              Player efficiency rating: {"\u00A0"}
              <span> {props.rating} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

/*
-slow, glitches
-IMPORTANT: !!! not props.team_name, props.player_efficiency_rating. 
use name of attribute 
props.img not props.name
-
<Tilt
className="Tilt"
options={{ max: 5 }}
style={{ height: 500, width: 350 }}
>
      
<div className="inner Tilt-inner">
</Tilt>  

// use item passed in (props name of player) to get item from array? url..or object pass as key

References:
-Angela Yu's The Complete 2022 Web Development Bootcamp on Udemy (react section), eg course materials: https://codesandbox.io/s/mapping-components-completed-forked-ou8v40
*/
