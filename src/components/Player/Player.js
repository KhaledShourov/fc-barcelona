import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen, faPlus} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
  console.log(props.player.image)
  const {image, name, email, salary} = props.player;
  return (
    <div className="player">
      <div>
        <img src={image} alt="images" />
      </div>
      <div>
         <h3>Player Name: {name}</h3>
         <p> Email: < FontAwesomeIcon icon = {faEnvelopeOpen}/> {email}</p>
         <p>Salary: {salary}</p>
         <button className="add-button"> < FontAwesomeIcon icon = {faPlus}/> Add Player</button>
      </div>
    </div>
  );
};

export default Player;