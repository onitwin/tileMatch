import { React, useState } from "react";
import GamePage from "./GamePage";

const LandingPage = () => {
    const [noOfTiles, setNoOfTiles] = useState(9);

    return (
        <>
            <GamePage noOfTiles={noOfTiles} />
        </>
    );
};
export default LandingPage;

//add routing mechanism here
