var express = require('express');

var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

var app = express();
var path = require('path');

var http = require('http');
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

//set up path
const port = process.env.PORT || 3001;

//set up router
var router = express.Router();

//set up logger
app.use(logger('dev'));

//set up Cross-Origin resource sharing
app.use(cors());

//handle http post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(__dirname));

//setting up mongodb
//Set up default mongoose connection
//var mongoDB = 'mongodb://127.0.0.1/my_database';
//mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const dbName = 'events-react-dev';
const uri = `mongodb+srv://admin:admin@cluster0-acigc.mongodb.net/test?retryWrites=true&w=majority
`;

mongoose.connect(uri
    ).then(() => {
        console.log('connected to db');
        app.listen(4000);
    }).catch(err => {
        console.log(err);
    });

connectMongo =() => {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("HackFSU").collection("Venue");

        // perform actions on the collection object
        var responseObject = [];

        const newCursor = collection.find();
        newCursor.forEach(function(res){
            responseObject.push(res)
        });

        client.close();

        return responseObject;
    });
}
connectMongo();

//set up schema
//Define a schema
var Schema = mongoose.Schema;

var venueSchema = new Schema({
  name: String,
  date: String,
  city: String,
  state: String
});

// Compile model from schema
var VenueModel = mongoose.model('Venue', venueSchema );
var cursor;
function getData(){
    cursor = VenueModel.find();
    //console.log(cursor);
    // selecting the 'name' and 'age' fields
    cursor.select('city state');

    // limit our results to 5 items
    cursor.limit(5)
    //console.log(cursor);
}

function queryData(){
    db.collection('Venue').find().toArray(function(err, docs) {

        //assert.equal(err, null);
        //assert.notEqual(docs.length, 0);

        docs.forEach(function(doc) {
            console.log(doc.name + " is a " + doc.city + " company.");
        });

        db.close();

    });
}

app.use('/login', (req, res, next) => {
    console.log('here login')
    const route1 = path.join(__dirname, '/views/login.html');
    res.sendFile(route1);
})

app.use('/test', (req, res, next) => {
    console.log("1: " + res);
    console.log("2: " + req);
    console.log("This is: " + req.body.test);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    console.log(__dirname);
    console.log("In index");
    const route = path.join(__dirname, "/views/main.html");
    console.log(route);
    res.sendFile(route);   
});

// app.use('/login', (req, res, next) => {
//     console.log('here login')
//     const route1 = path.join(__dirname, '/views/login.html');
//     res.sendFile(route1);
// })

// app.post('/test', (req, res) => {
//     console.log("1: " + res);
//     console.log("2: " + req);
//     console.log("This is: " + res.body.test);
    
// });

// app.get('/test', urlencodedParser, (req, res, next) => {
//     console.log(req.body.test);
//     console.log(req.params.name);
// });

// app.use('/login', (req, res) => {
//     const route = path.join(__dirname, "/views/login.html");
//     res.sendFile(route);
// })

app.listen(port, () => {
    console.log("Connecting to port");
    getData();
    //queryData();
});