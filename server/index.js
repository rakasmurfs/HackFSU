var express = require('express');

var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

var testAPIRouter = require("./routes/testAPI");

var app = express();
var path = require('path');

var http = require('http');
var cors = require("cors");
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

function connectMongo() {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    let responseObject = [];
    
    client.connect(err => {
        const collection = client.db("HackFSU").collection("Venue");

        // perform actions on the collection object
        // var responseObject = [];

        const newCursor = collection.find();
        newCursor.forEach(function(res){
            //console.log(res);
            responseObject.push(res);
            //console.log(responseObject);
            //responseObject = [...responseObject, res];
        });
        //console.log(responseObject);
        responseObject.map((test) => {
            //console.log(test);
        })

        client.close();

        // return responseObject;
        console.log(responseObject);
        console.log("hi");
        //return "hi";
        return responseObject;
    });
    // console.log(responseObject);
    //return responseObject;
}
// connectMongo();

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

        docs.forEach(function(doc) {
            console.log(doc.name + " is a " + doc.city + " company.");
        });

        db.close();
    });
}

app.use("/getData", async (req, res, next) => {
    try {
        let res = await VenueModel.find().exec(function(err, data) {
            if (err) {
                res.send("error")
            }
            res.send(data)
        });
        res.send("no");
    }
    catch(err){
        console.log(err);
    }
})

app.use("/testAPI", testAPIRouter);

app.use('/login', (req, res, next) => {
    console.log('In login');
    const route1 = path.join(__dirname, '/views/login.html');
    res.sendFile(route1);
})

app.use('/test', (req, res, next) => {
    console.log("Form input: " + req.body.test);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    console.log(__dirname);
    console.log("In index");
    const route = path.join(__dirname, "/views/main.html");
    console.log(route);
    res.sendFile(route);   
});

app.listen(port, () => {
    console.log("Connecting to port " + port);
    getData();
    //queryData();
});

// const express = require('express');
// const bodyparser = require('body-parser');
// const mongoose = require("mongoose");

// var app = express();

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:true}));

// mongoose.connect("mongodb+srv://admin:admin@cluster0-acigc.mongodb.net/test?retryWrites=true&w=majority")

// const VenueModel = mongoose.model("Venue", {
//   name: String,
//   date: String,
//   city: String,
//   state: String
// }, {});

// app.get("/venue", async(req, res, next) => {
//     try{
//         var result = await VenueModel.find().exec();
//         res.send(result);
//     }
//     catch(err){
//         console.log("failed");
//     }
// })

// app.listen(3001, ()=>{
//     console.log("Connected to port");
// })