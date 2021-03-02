import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import './Player.css'
const Player = (props) => {
    // console.log(props)
   const {image, name, email, country, salary} = props.player
    return (
        <div className = "player">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className = "player-info">
                <h4>Player Name: {name}</h4>
                <p> < FontAwesomeIcon icon = {
                    faEnvelopeOpen
                }
                /> {email}</p>
                <p>Country: {country}</p>
                <p>Salary: {salary}</p>
                < button className = "main-button" 
                onClick = {()=> props.handleAddPlayer(props.player)}
                > Add Salary</button >
                
            </div>
        </div>
    );
};

export default Player;