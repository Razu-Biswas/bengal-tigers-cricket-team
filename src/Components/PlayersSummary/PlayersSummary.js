import React from 'react';
import './PlayersSummary.css';

const PlayersSummary = (props) => {


    return (
        <div className="summary-area">

            <div>
                  {
                    props.playersSummary.map((added) => (
                     <div>
                         <h3>Total Added Player: {added.name}</h3>
                         <h4>Salary: {added.salary}</h4>
                     </div>))
                  }

            </div>
            
          {
             <div>
                <h3>Total Add Players: {props.playersSummary.length} </h3>
                <h1>Total Budget: {props.playersSummary.reduce((total, salary) => total + salary.salary, 0)}</h1>
            </div>
          }

        </div>
    );
};

export default PlayersSummary;