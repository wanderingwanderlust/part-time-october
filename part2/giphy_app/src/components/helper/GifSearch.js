import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import GifViewer from "./GifViewer";
import axios from "axios";

function GifSearch() {
    const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP'
    const [input, setInput] = useState('')
    const [gifs, setGifs] = useState([])

    const search = async(event) => {
        event.preventDefault();

        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}&rating=g`)
        console.log(res.data.data)
        setGifs(res.data.data)
        toast('We are searching for your gif')
        // Notify the user that the search was successful
    }

    const save = (gif_url) => {
        console.log(gif_url)
        toast('We have successfully saved your gif')
    }


    return (
        <div className="container">
            <ToastContainer />
            <div className="row">
                <h3>Search for Gifs</h3>
                <form onSubmit={search}>
                    <input value={input} onChange={(event) => setInput(event.target.value)} />
                    <button>Search</button>
                </form>
            </div>
            <div className="row">
                <h3>Results for {input}</h3>
                <GifViewer gifs={gifs} buttonAction={save} buttonText={'Save Gif'} />
            </div>
        </div>
    )



}


export default GifSearch