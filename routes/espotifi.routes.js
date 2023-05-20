import express from "express"
import db from '../db.js'
const router = express.Router()

router.get('/showBands', (req, res) => {
    const showBands = db.show()
    res.json(showBands)
})

router.get('/showBand/:id', (req, res) => {
    let bandId = req.params.id
    let band = db.obtBand(bandId)
    let { id, name, followers, genre, image } = band
    console.log(id)
    console.log(name)
    console.log(followers)
    console.log(genre)
    console.log(image)
    if (band !== undefined) {
        res.status(200).json(band)
    }
    else {
        res.status(404).json({ mensaje: 'banda NO encontrada' })
    }
})


router.put('/follow/:id', (req, res) => {
    const bandID = req.params.id
    let band = db.obtBand(bandID)
    let { id, name, followers, genre, image } = band
    followers = Number(followers) + 1
    db.follow(bandID, { id, name, followers, genre, image })
    res.json({ mensaje: 'Se sumo un follow a la Banda!!!' })
})

router.put('/unfollow/:id', (req, res) => {
    const bandID = req.params.id
    let band = db.obtBand(bandID)
    let { id, name, followers, genre, image } = band
    followers = Number(followers) - 1
    db.follow(bandID, { id, name, followers, genre, image })
    res.json({ mensaje: 'Se resto un follow a la Banda!!!' })
})


export default router;