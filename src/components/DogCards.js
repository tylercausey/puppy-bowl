import React from "react";
import { Link } from "react-router-dom";

const DogCards = (props) => {
    const {puppyProps} = props;

    return(
        <div id='allCards'>
            {
                !puppyProps.length ? <h3>No current data loaded</h3> :
                puppyProps.map((individualPuppy, idx) => {
                    return(
                        <div key={idx} className="card">
                            <div className="cardHeader">
                                <p className="dogName"> {individualPuppy.name}</p>
                                <p className="dogID">{individualPuppy.id}</p>
                            </div>
                            <img src={individualPuppy.imageUrl} alt="Puppy Pic"></img>
                            <Link to={'/' + idx} className="seeDetailsButton">See Details</Link>
                        </div>
                    )   
                })
            }
        </div> 
    )
}
export default DogCards