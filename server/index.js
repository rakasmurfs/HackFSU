var express = require('express');

var mongoose = require('mongoose');

var app = express();
var path = require('path');

const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

//set up path
const port = process.env.PORT || 3001;

//set up logger
app.use(logger('dev'));

//set up Cross-Origin resource sharing
app.use(cors());

//handle http post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//setting up mongodb
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
//mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use("/", (req, res, next) => {
    console.log(__dirname);
    const route = path.join(__dirname, "/views/index.html");
    console.log(route);
    res.sendFile(route);
})

app.get('/test', urlencodedParser, (req, res, next) => {
    console.log(req.body.test);
    console.log(req.params.name);
})

app.listen(port, () => {
    console.log("Connecting to port");
});