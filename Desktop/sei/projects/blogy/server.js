//Require necessary NPM Packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
// const bodyParser = require("body-parser");

//Require Route Files

const indexRouter = require('./app/routes/index');
const articlesRouter = require('./app/routes/articles');

//Require DB configuration File
const db = require('./config/db');

//Establish database connection 
mongoose.connect(db, { useNewUrlParser: true});

mongoose.connection.once('open',() => {
  console.log('connected to Mongo');
})

//Instantiate Express App Object
const app = express();

//Define Port for the API to run it 
// what is process.env.Port ??????????
const port = process.env.Port || 5000;
const reactPort = 3000;

/** Middleware */
// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method `.use` sets up middleware for the Express application
app.use(express.json());

//set CORS header on response from this API using the 'cors' NPM packages.

app.use(cors({origin : process.env.CLIENT_ORIGIN ||`http://localhost:${reactPort}`}));
/**  Routes */

//Mount imported Routers

app.use(indexRouter);
app.use(articlesRouter);
//Start the server to listen for requests on a given port
app.listen(port, () => {
  console.log(`blogy is listenning on port ${port}`);
});

/** C R U D 
 *  R 
 *   Read All
 *   Read one by ID
 * 
 * create       create
 * Read 
 *   Read All    Index
 *   Read By ID   Show
 * Update      UPdate
 * Delete      Destroy
*/