const Tile = ({ imageOne, imageTwo }) => {
    return (
        <>
            <div className="tileWrap">
                {/* <img className="tileImageFront" src={imageOne}/> */}
                <div className="cardBack"></div>
                <img className="tileImageBack" src={imageTwo} />
            </div>
        </>
    );
};
export default Tile;
