const router = require('express').Router();
let TVShow = require('../models/tvshow.model');

router.route('/').get((req, res) => {
    TVShow.find()
        .then((tvshows) => res.json(tvshows))
        .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/:id').get((req, res) => {
    TVShow.find({id: req.params.id})
        .then((tvshow) => res.json(tvshow))
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
});

router.route('/update/:id').post((req, res) => {
    TVShow.findOneAndUpdate({
        id: req.params.id
    },
    {
        $set: {
            id: req.body.id,
            image: req.body.image,
            name: req.body.name,
            premiered: req.body.premiered,
            summary: req.body.summary,
            genres: req.body.genres,
            schedule: req.body.schedule,
            status: req.body.status,
            network: req.body.network,
            webChannel: req.body.webChannel,
            episodes: req.body.episodes,
            unseenEpisodes: req.body.unseenEpisodes
        }
    },
    {
        new: true
    })
    .then(() => res.json('Updated!'))
    .catch((err) => res.status(400).json('Error: ' + err));
    /*TVShow.find({id: req.params.id})
        .then((tvshow) => {
            console.log(typeof(tvshow));
            tvshow.id = req.body.id;
            tvshow.image = req.body.image;
            tvshow.name = req.body.name;
            tvshow.premiered = req.body.premiered;
            tvshow.summary = req.body.summary;
            tvshow.genres = req.body.genres;
            tvshow.schedule = req.body.schedule;
            tvshow.status = req.body.status;
            tvshow.network = req.body.network;
            tvshow.webChannel = req.body.webChannel;
            tvshow.episodes = req.body.episodes;
            tvshow.cast = req.body.cast;
            tvshow.unseenEpisodes = req.body.unseenEpisodes;

            tvshow.save()
                .then(() => res.json('Updated!'))
                .catch((err) => res.status(400).json('Error ' + err));
                
        })
        .catch((err) => res.status(400).json('Error ' + err));
        */
})

module.exports = router;