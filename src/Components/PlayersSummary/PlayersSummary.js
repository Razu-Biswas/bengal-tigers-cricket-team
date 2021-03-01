import React from 'react';
import './PlayersSummary.css';

const PlayersSummary = (props) => {


    return (
        <div className="summary-area">

            <div>
                  {
                    props.playersSummary.map((added) => (
                     <div className="summary">
                         <h4>Name: {added.name}</h4>
                         <h5>Salary: {added.salary}</h5>
                     </div>))
                  }

            </div>
            
          {
             <div>
                <h3>Total Players: {props.playersSummary.length} </h3>
                <h2>Total Budget: {props.playersSummary.reduce((total, salary) => total + salary.salary, 0)}</h2>
            </div>
          }

        </div>
    );
};

export default PlayersSummary;