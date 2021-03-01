import React from 'react';

const PlayersSummary = (props) => {


    return (
        <div>
            <h2>Total Add Players: {props.playersSummary.length} </h2>
            <h2>Total Budget: {props.playersSummary.reduce((total, salary) => total + salary.salary, 0)}</h2>
            {
                props.playersSummary.map((added) => (<div>
                    <h1>Total Added Player: {added.name}</h1>
                    <p>Salary: {added.salary}</p>
                </div>))
            }


        </div>
    );
};

export default PlayersSummary;