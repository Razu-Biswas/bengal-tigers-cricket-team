import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/player-info.json';
import PlayersSummary from '../PlayersSummary/PlayersSummary';
import PlayersDetails from '../PlayersDetails/PlayersDetails';
import './Players.css';


const Players = () => {
    const [players, setPlayers] = useState([])
    
    useEffect(()=> {
        setPlayers(fakeData)
    }, [])

    const [added, setAdded] = useState([])
    const addedPlayer = (add)=> {
        setAdded([...added,add])
    }
    return (
        <div >

            <div className="summary-area">
               {
                 <PlayersSummary playersSummary={added}></PlayersSummary>
                }               
            </div>

            <div className="players">
                 {
                    players.map((player)=> <PlayersDetails player={player} add={addedPlayer}></PlayersDetails>)
                 }
            </div>
            
        </div>
    );
};

export default Players;

