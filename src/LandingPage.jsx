import {React, useState} from "react"
import GamePage from "./GamePage"
import AddressError from "./AddressError";

const LandingPage=()=>{
   
  const [noOfTiles,setNoOfTiles]=useState(5);



    return(
        <>
        <GamePage noOfTiles={noOfTiles}/>
        </>
       
      
    )

}
export default LandingPage

//add routing mechanism here