const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvshowSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    image: { type: Map },
    name: { type: String, required: true },
    premiered: { type: String },
    summary: { type: String },
    genres: { type: Array },
    schedule: { type: Map },
    status: { type: String, required: true },
    network: { type: Map },
    webChannel: { type: Map },
    episodes: { type: Array, required: true },
    cast: { type: Array, required: true },
    unseenEpisodes: { type: Number },
});

const TVShow = mongoose.model('TVShow', tvshowSchema);

module.exports = TVShow;