import { createRoot } from 'react-dom/client'
import { DogCards, SingleDog, NameSearch, BreedSearch } from "./components";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Website = () => {
    const [puppyList,setPuppyList] = useState([]);
    useEffect(() => {
        const puppyFetcher = async () => {
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players');
                const translatedData = await response.json();
                const desiredData= translatedData.data.players
                setPuppyList(desiredData);
            } catch (error){
                console.log(error);
            }
        }
        puppyFetcher();
    }, [])
    return(
        <BrowserRouter>
            <div id='content'>
                <div id='searchBars'> 
                    <NameSearch puppyProps={puppyList}> </NameSearch>
                    <BreedSearch puppyProps={puppyList}> </BreedSearch>
                </div>
                <div>
                    { 
                        <Routes>
                            <Route path='/' element={<DogCards puppyProps={puppyList}/>} > </Route>
                            <Route path='/:id' element={<SingleDog puppyProps={puppyList}/>} > </Route>
                        </Routes>   
                    }
                </div>
            </div>
        </BrowserRouter>
    )
}

const appElement = document.getElementById('app');

const root = createRoot(appElement);

root.render(<Website />)