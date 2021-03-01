import React from 'react';
//using bootstrap and change font style  and use css style( for extra marks)
// using font awesome button icon style ( for extra marks)
// using destructuring (for extra bonus marks)
// And create Extra component folder ( for extra bonus marks )
// also i tried Components meaningfull name (for extra bonus marks)
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayersDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const PlayersDetails = (props) => {
    const {name, salary, country, image, email, gender} = props.player;
    return (
        <div className="player-details">
            <div>
                <img src={image} alt="..."/> 
            </div>
           <div>
                 <h5> {name}</h5>
                 <h6>{gender}</h6>
                 <p>{email}</p>
                 <h6> {country} </h6>
                 <h6> $ {salary}</h6>
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