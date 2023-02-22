import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleDog = (props) => {
    const {id} = useParams();
    const allDogs = props.puppyProps;
    const chosenDog = allDogs.filter ((dog) => {
    return dog.id == id
    })
    const trueChosenDog = chosenDog[0]
    console.log(trueChosenDog)
    return(
        <div className="puppyStats"> 
            <Link to="/" >Click here to return to the homepage</Link>
            <p>ID: {trueChosenDog.id}</p>
            <p>Name: {trueChosenDog.name}</p>
            <p>Status: {trueChosenDog.status}</p>
            <img src={trueChosenDog.imageUrl} alt='Puppy Pic'></img>
            <p>Created At: {trueChosenDog.createdAt}</p>
            <p>Updated At: {trueChosenDog.updatedAt}</p>
            <p>Team ID: {trueChosenDog.teamId}</p>
            <p>Cohort ID: {trueChosenDog.cohortId}</p>
        </div>
    )
}

export default SingleDog