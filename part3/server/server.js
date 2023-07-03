import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';
import gifRouter from './routes/gifs.js'

mongoose.connect('mongodb+srv://root:root@giphyapi.jzy79se.mongodb.net/?retryWrites=true&w=majority')

const app = express()
const port = 3001

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello World by Greg</h1></body></html>')
})

/* Lesson Obj
 1: Understand More about Express
 2: Authentication / Authorization
 3: Expand User Routes / Gif Routes Established
*/

app.use('/auth', authRouter)
app.use('gifs', gifRouter)

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})