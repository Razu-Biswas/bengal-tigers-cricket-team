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
        const checking = added.filter((check) => check.id === add.id)
        if(checking.length === 0){
            setAdded([...added,add])
        }
        else{
            alert("Player Already Added")
        }
        
    }
    return (
        <div  className="players-details">
            <div className="players">
                 {
                    players.map((player)=> <PlayersDetails player={player} add={addedPlayer}></PlayersDetails>)
                 }
            </div>

            <div className="summary-area">
               {
                 <PlayersSummary playersSummary={added}></PlayersSummary>
                }               
            </div>
            
        </div>
    );
};

export default Players;

