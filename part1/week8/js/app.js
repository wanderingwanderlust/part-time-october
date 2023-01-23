const gifContainer = document.getElementById('gif-container')
const gifCarousel = document.getElementById('gif-carousel')
const gifCarouselImage = document.getElementsByClassName('carousel-image')
const apiKey = 'WtnZ88mHU8fNCYUPVgt0kErd811c9qCX'
const trendingGifUrl = `http://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&rating=g&limit=5`;

console.log(gifCarouselImage)

function hello() {
    return "Hello World!";
  }

async function fetchGifs() {
  gifContainer.innerHTML = '';

  const res = await fetch(trendingGifUrl)
  const jsonData = await res.json()

  console.log(jsonData.data)
  renderGifs(jsonData.data)
}

function renderGifs(gifs) {
  gifs.forEach((gif, key) => {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', gif.images.original.url)
    newImage.setAttribute('alt', gif.title)

    console.log('gif index', key)

    const svgImage = gifCarouselImage[key]
    console.log(svgImage)
    svgImage.setAttribute('src', gif.images.original.url)

    gifContainer.append(newImage)
    gifCarousel.append(svgImage)
  })
}

fetchGifs()