import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleDog = (props) => {
    const {id} = useParams();
    const chosenDog = props.puppyProps[id];

    return(
        <div className="puppyStats"> 
            <Link to="/" >Click here to return to the homepage</Link>
            <p>{chosenDog.id}</p>
            <p>{chosenDog.name}</p>
            <p>{chosenDog.status}</p>
            <img src={chosenDog.imageUrl} alt='Puppy Pic'></img>
            <p>{chosenDog.createdAt}</p>
            <p>{chosenDog.updatedAt}</p>
            <p>{chosenDog.teamId}</p>
            <p>{chosenDog.cohortId}</p>
        </div>
    )
}

export default SingleDog