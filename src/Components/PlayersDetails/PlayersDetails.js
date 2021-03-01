import React from 'react';
//using bootstrap and change font style ( for extra marks)
// using font awesome button icon style ( for extra marks)
// using destructuring (for extra bonus marks)
// And create Extra component folder ( for extra bonus marks )
// also i tried Components meaningfull name (for extra bonus marks)
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayersDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const PlayersDetails = (props) => {
    const {name, salary, country, image} = props.player;
    return (
        <div className="player-details">
            <div>
                <img src={image} alt="..."/> 
            </div>
           <div className="player-style">
                 <h4>Name: {name}</h4>
                <h5>Country: {country} </h5>
                 <h5>Salary: $ {salary}</h5>
                 {/* use fontawesome button icon (for extra bonus marks) */}
                 <button
                   className="button"  

                        onClick={() => props.add(props.player)}
                        >
                           <FontAwesomeIcon icon={faUserPlus} />  ADD
                   
                   </button>
           </div>
        </div>
    );
};

export default PlayersDetails;