import React from 'react';
import './Team.css'
import { useState } from 'react';
import fakeData from '../../fakeData/data.json'
import Player from '../Player/Player'

const Team = () => {
  const [players, setPlayers] = useState(fakeData)
  console.log(fakeData)
  return (
    <div className ="team-container">
      <div className="player-container">
          {
            players.map(player =><Player player={player}></Player>)
          }
      </div>
      <div className="cart-container">
        <h3>This is cart</h3>
      </div>
    </div>
  );
};

export default Team;