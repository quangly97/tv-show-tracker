const router = require('express').Router();
let TVShow = require('../models/tvshow.model');

router.route('/').get((req, res) => {
    TVShow.find()
        .then((tvshows) => res.json(tvshows))
        .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const id = req.body.id;
    const image = req.body.image;
    const name = req.body.name;
    const premiered = req.body.premiered;
    const summary = req.body.summary;
    const genres = req.body.genres;
    const schedule = req.body.schedule;
    const status = req.body.status;
    const network = req.body.network;
    const webChannel = req.body.webChannel;
    const episodes = req.body.episodes;
    const cast = req.body.cast;
    const unseenEpisodes = req.body.unseenEpisodes;

    const newShow = new TVShow({
        id,
        image,
        name,
        premiered,
        summary,
        genres,
        schedule,
        status,
        network,
        webChannel,
        episodes,
        cast,
        unseenEpisodes
    });

    newShow.save()
        .then(() => res.json(`${name} added`))
        .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    TVShow.findOneAndDelete({id: req.params.id})
        .then(() => res.json('TV show deleted'))
        .catch((err) => res.status(400).json('Error' + err));
})

module.exports = router;