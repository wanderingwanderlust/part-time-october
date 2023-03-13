import logo from './logo.svg';
import './App.css';
import Footer from './components/partials/Footer.js'
import { Button } from 'reactstrap'
import ToDoClass from './components/Todo/ToDoClass';
import ToDoHook from './components/Todo/ToDoHook';
import CarouselStrap from './components/helper/CarouselStrap';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const apiKey = ''; //go to developer giphy and create your own dev account and add the key here
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
    <div className="App">
      <div className='container'>
        <CarouselStrap images={homeImages} />
        <CarouselStrap images={imageTwo} />
      </div>
      

      <header className="App-header">
        <ToDoClass />
        <Button color='primary'>Hello World</Button>
        <ToDoHook />
      </header>
      <Footer />
    </div>
  );
}

export default App;
