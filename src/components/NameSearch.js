import React from "react";
import { useState } from "react";

const NameSearch = (props) =>{
    const [searchQuery, setSearchQuery] = useState('');
    const {puppyProps} = props;

    let filteredDogs = puppyProps.filter((singleDog) =>{
        let lowerCasedName = singleDog.name.toLowerCase();
        return lowerCasedName.includes(searchQuery.toLowerCase())
    }) 

    return(
        <div> 
            <input 
                type="text" 
                placeholder="Please enter a name"
                onChange={(event) => {
                    setSearchQuery(event.target.value)
                }}
            >
            </input>
            <section>
                {
                    !filteredDogs.length ? <div>No data yet!</div> : filteredDogs.map((singleDog, idx) => {
                        return (
                            <div key={idx}>
                                <p>Name: {singleDog.name}</p>
                                {/* <Link to={"/" + idx}>Go to {singleDog.name}</Link> */}
                            </div>
                        )
                    }) 
                }
            </section>
        </div>
    )
}

export default NameSearch