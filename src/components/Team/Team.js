import React from 'react';
import fakeData from '../../fakeData/data.json';
import {useState} from 'react';
import './Team.css';
import Player from '../Player/Player';
import Salary from '../Salary/Salary';

const Team = () => {
    const player15 = fakeData.slice(0, 15);
    const [players, setPlayers] = useState(player15);
    const [salary, setSalary] = useState([]);

    const handleAddPlayer = (player) =>{
      const newSalary = [...salary, player];
      setSalary(newSalary);
    }
    return (
      <div className="team-container">
            <div className="player-container">
              {
                  players.map(play => <Player
                     handleAddPlayer ={ handleAddPlayer}
                    player ={play}></Player>)
                }
            </div>
            <div className="salary-summary">
                <Salary salary={salary}></Salary>
            </div>
      </div>
        
    );
};

export default Team;
