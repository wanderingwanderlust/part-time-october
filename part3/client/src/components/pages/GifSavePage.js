import GifViewer from "../helper/GifViewer"

function GifSavePage() {

   const userGifs = [];

   const remove = () => {
    console.log("Deleting Gif")
   }


    return (
        <div>
            <h1>Welcome to the Saved Page</h1>
            <div className="row">
                <p>Here is a list of all your saved Gifs</p>
                <p>{userGifs.empty ? 'No Gifs' : userGifs.length } </p>
                <GifViewer gifs={userGifs} buttonAction={remove} buttonText={"Delete"} />
            </div>
        </div>
    )
}

export default GifSavePage