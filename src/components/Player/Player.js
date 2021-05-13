import React from 'react';
import './Player.css';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen, faPlus} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
  
  const {image, name, email, salary} = props.player;
  return (
    <div className="player">
      <div>
        <img src={image} alt="images" />
      </div>
      <div>
         <h5>Player Name: {name}</h5>
         <p> Email: < FontAwesomeIcon icon = {faEnvelopeOpen}/> {email}</p>
         <p>Salary: {salary}</p>
         <Button variant="primary"
         onClick={()=>props.handleAddPlayer(props.player)}
         > < FontAwesomeIcon icon = {faPlus}/> Add Player</Button>
      </div>
    </div>
  );
};

export default Player;