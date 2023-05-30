import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://root:root@giphyapi.o3wilzu.mongodb.net/?retryWrites=true&w=majority')

const app = express()
const port = 3001

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello World by Greg</h1></body></html>')
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})