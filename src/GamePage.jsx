import { React, useState } from "react";
import Tile from "./Tile";

const GamePage = ({ noOfTiles }) => {
    const king =
        "https://media.istockphoto.com/id/91515276/photo/king-of-hearts.jpg?s=612x612&w=0&k=20&c=zlYq1JzoZjtJevtAeBpBqNpxmS0ESsoGYhN-y_2NnkU=";
    const jack =
        "https://media.istockphoto.com/id/184845539/photo/jack-of-clubs.jpg?s=612x612&w=0&k=20&c=nJTYqVbhWPCZRhAuJziBeRDbMyZFg8kId5_KQTTID3I=";
    const blackQueen =
        "https://media.istockphoto.com/id/480334165/photo/playing-cards-queen-of-spades.jpg?s=612x612&w=0&k=20&c=FEjF625F8mC8pYrRrvWolu1WQJ83hSpbLtSDxsQYIUo=";
    const redQueen =
        "https://media.istockphoto.com/id/644208366/photo/queen-of-hearts-playing-card-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=OWKbOKkIAZGfkMwDdSSR-BElu6rsVkefLhwT9VZPegg=";

    return (
        <>
            <header className="headerTextWrap">
                <h1 className="headerText">FLIPPER</h1>
            </header>
            <div className="gameContainer">
                <div className="allTiles">
                    <Tile imageOne={blackQueen} imageTwo={redQueen} />
                    <Tile imageOne={king} imageTwo={jack} />
                    <Tile imageOne={blackQueen} imageTwo={redQueen} />
                    <Tile imageOne={king} imageTwo={jack} />
                    <Tile imageOne={blackQueen} imageTwo={redQueen} />
                    <Tile imageOne={king} imageTwo={jack} />
                    <Tile imageOne={blackQueen} imageTwo={redQueen} />
                    <Tile imageOne={king} imageTwo={jack} />
                    <Tile imageOne={blackQueen} imageTwo={redQueen} />
                    <Tile imageOne={king} imageTwo={jack} />
                    <Tile imageOne={blackQueen} imageTwo={redQueen} />
                    <Tile imageOne={king} imageTwo={jack} />
                    <Tile imageOne={blackQueen} imageTwo={redQueen} />
                    <Tile imageOne={king} imageTwo={jack} />
                    <Tile imageOne={blackQueen} imageTwo={redQueen} />
                    <Tile imageOne={king} imageTwo={jack} />
                </div>
            </div>
        </>
    );
};

export default GamePage;
