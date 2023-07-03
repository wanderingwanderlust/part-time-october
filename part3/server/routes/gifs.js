import express from 'express';
import Gif from '../models/Gif.js'

const router = express.Router();

// (C) Post - Create a Saved Gif under a user account
router.post('/', (req, res) => {
    Gif.create({
        url: req.body.url,
        title: req.body.title,
        user: req.body.user.id,
        created_at: Date.now()
    }, (err, gif) => {
        if(err) {
            console.log(err)
            res.send('error, gif could not be created')
        } else {
            res.send('Gif was successfully saved')
        }
    })
})

// (R) Get - Grab all Users Gifs
router.get('/', (req, res) => {
    const userId = req.query.user
    Gif.find({user: userId}, (err, gifs) => {
        if(err) {
            console.log(err)
            res.send('Error getting gifs from the DB')
        } else {
            res.send(gifs)
        }
    })
})

// (U) Update - Allow titles to be changed
router.put('/:id', (req, res) => {
    Gif.findByIdAndUpdate(req.params.id, {title: req.body.title}, (err, result) => {
        if(err) {
            console.log(err)
            res.send("Gif was not able to be updated")
        } else {
            console.log(result);
            res.send(`${result.title} has been updated on your Gif`)
        }
    })
})

// (D) Delete - Allow a user to delete a saved Gif
router.delete('/:id', (req, res) => {
    Gif.findByIdAndDelete(req.params.id, (err, result) => {
        if(err) {
            console.log(err)
            console.log("Gif was not deleted successfully")
        } else {
            console.log(result)
            res.send('Gif was deleted successfully')
        }
    })
})

export default router;