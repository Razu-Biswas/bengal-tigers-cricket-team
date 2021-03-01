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
                         <h5>Salary: $ {added.salary}</h5>
                     </div>))
                  }

            </div>
            
          {
             <div className="total-budget">
                <h4>Total Players: {props.playersSummary.length} </h4>
                <h3>Total Cost: $ {props.playersSummary.reduce((total, salary) => total + salary.salary, 0)}</h3>
            </div>
          }

        </div>
    );
};

export default PlayersSummary;