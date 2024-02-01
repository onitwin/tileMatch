
const Tile =({imageOne,imageTwo})=>{



    return (
        <>
        <div className="tileWrap">
            <img className="tileImageFront" src={imageOne}/>
            <img className="tileImageBack" src={imageTwo}/>
        </div>
        </>
    )
}
export default Tile