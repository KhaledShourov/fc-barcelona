import React from 'react';
import './Team.css'
import { useState } from 'react';
import fakeData from '../../fakeData/data.json'
import Player from '../Player/Player'
import Salary from '../Salary/Salary';


const Team = () => {
  const [players, setPlayers] = useState(fakeData)
  const[salary, setSalary] = useState([])
  

  const handleAddPlayer =(player)=>{
   const newSalary = [...salary, player];
    setSalary(newSalary);
  }
  return (
    <div className ="team-container">
      <div className="player-container">
          {
            players.map(player =><Player handleAddPlayer={handleAddPlayer} player={player}></Player>)
          }
      </div>
      <div className="salary-container">
        <Salary salary={salary}></Salary>
    
      </div>
    </div>
  );
};

export default Team;