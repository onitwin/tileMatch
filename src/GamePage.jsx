import { React, useState } from "react";
import Tile from "./Tile";
import images from "./data.js";

const GamePage = ({ noOfTiles }) => {
    const selectCards = (cards) => {
        for (let i = 0; i < noOfTiles; i++) {
            const index = Math.floor(Math.random() * cards.length) + 1;
            console.log("SLICEPOINT", index);
            imageSelection.push(cards[index]);
            cards.slice(index, 1);
            console.log("CARDS LENGTH: ", cards.length);
        }
    };

    const imageSelection = [];

    selectCards(images);

    const cardImages = imageSelection.map((image, key) => {
        return (
            <Tile
                imageOne={image.link}
                imageTwo={image.link}
                key={image.id}
            ></Tile>
        );
    });
    console.log(imageSelection);

    return (
        <>
            <header className="headerTextWrap">
                <h1 className="headerText">FLIPPER</h1>
            </header>
            <div className="gameContainer">
                <div className="allTiles">{cardImages}</div>
            </div>
        </>
    );
};

export default GamePage;
