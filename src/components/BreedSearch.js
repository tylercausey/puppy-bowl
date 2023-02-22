import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BreedSearch = (props) =>{
    const [searchQuery, setSearchQuery] = useState('');
    const {puppyProps} = props;

    let filteredDogs = puppyProps.filter((singleDog) =>{
        // console.log(searchQuery, "This is search query")
        // console.log(singleDog, "This is single dog")
        let lowerCasedBreed = singleDog.breed.toLowerCase();
        // console.log(lowerCasedBreed.includes(searchQuery.toLowerCase()))
        return lowerCasedBreed.includes(searchQuery.toLowerCase())
    }) 
console.log(filteredDogs)
    return(
        <div> 
            <input 
                type="text" 
                placeholder="Please enter a breed"
                onChange={(event) => {
                    setSearchQuery(event.target.value)
                }}
            >
            </input>
            <section>
                {
                    !filteredDogs.length || searchQuery.length==0 ? <div>No data yet!</div> : filteredDogs.map((singleDog) => {
                        return (
                            <div key={singleDog.id}>
                                <p>Breed: {singleDog.breed}</p>
                                <Link to={"/" + singleDog.id}>Go to {singleDog.name}</Link>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default BreedSearch