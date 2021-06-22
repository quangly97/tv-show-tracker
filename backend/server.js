const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const tvshowsRouter = require("./routes/tvshow.route");

app.use('/', tvshowsRouter);