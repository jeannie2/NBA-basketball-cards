import React from "react";

function getPlayerImage(props) {
  //console.log(props);
  const firstLastName = props.split(" ");
  const firstName = firstLastName[0];
  const lastName = firstLastName[1];

  return (
    "https://nba-players.herokuapp.com/players/" + lastName + "/" + firstName
  );
}

function Avatar(props) {
  return (
    <img
      src={getPlayerImage(props.avatar)}
      alt="avatar_img"
      onError={(e) => {
        e.target.src = "../assets/defaultAvatar.png";
        e.target.style = "width: 55%; height: auto";
      }}
    />
  );
}

export default Avatar;

/* 
-ideally not this way, use react way
-function getPlayerImage(props) part: should be props instead of name? what is convention? QQ
-inside getPlayerImage(props): 
  /* const [fullName, setNames] = useState({
    firstName: "",
    lastName: ""
  }); 
  
   setNames({
    firstName: fullName[0],   
    lastName: fullName[1]
  }); 

References: 
-https://stackoverflow.com/a/52525979
*/
