import { Button } from 'reactstrap'
// import ToDoClass from '../ToDo/ToDoClass';
import ToDoHook from '../Todo/ToDoHook';
import CarouselStrap from '../helper/CarouselStrap';
import {useEffect, useState} from 'react';
import axios from 'axios';

function HomePage() {
    const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP'; //go to developer giphy and create your own dev account and add the key here
    const [homeImages, setHomeImages] = useState([])
    const [imageTwo, setImageTwo] = useState([])
  
    useEffect(() => {
      getImages()
      randomImage()
    }, [])
  
    async function getImages() {
      const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&rating=g&limit=5`);
      setHomeImages(res.data.data)
    }
  
    async function randomImage() {
      const res = await axios.get(`https://api.giphy.com/v1/stickers/trending?&api_key=${apiKey}`);
      setImageTwo(res.data.data)
    }


  return (
    <div>
      <div className="container">
        <CarouselStrap images={homeImages} />
        <CarouselStrap images={imageTwo} />
      </div>

      <header className="App-header">
        <Button color="primary">Hello World</Button>
        <ToDoHook />
      </header>
    </div>
  );
}

export default HomePage;
