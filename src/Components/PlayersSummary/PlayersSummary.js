import React from 'react';
import './PlayersSummary.css';

const PlayersSummary = (props) => {

    return (
        <div className="summary-area">
            <h3 className="all-summary">All Budget Summary</h3>
            <div>
                  {
                    props.playersSummary.map((added) => (
                     <div className="summary">
                         <h6>Name: {added.name}</h6>
                         <h6>Salary: $ {added.salary}</h6>
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