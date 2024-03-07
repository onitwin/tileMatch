const Tile = ({ imageOne, imageTwo }) => {
    return (
        <>
            <div className="tileWrap">
                {/* <img className="tileImageFront" src={imageOne}/> */}
                <div className="cardBack">
                    <img
                        className="cardBackImage"
                        src="src/assets/pokemonImages/pokeball.png"
                    />
                </div>
                <div className="tileImageBack">
                    <img className="tileImage" src={imageTwo} />
                </div>
            </div>
        </>
    );
};
export default Tile;
