//Creating a base name for the mongoDB
const mongooseBaseName = 'blogy';


//Create the mongoDB UGI for Developement and Test

const database = {
  developement: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`,
};
//Identify if development environment is Test or Development
//select DB based on wether a test file was executed before `server`

const localDB = process.env.TESTENV ? database.test : database.developement

// Environment variable MONGODB_URL will be available in 
//Heroku production environment , otherwise use Test or Development 

const currentDB = process.env.MONGODB_URI || localDB;


//Export the appropriate database based on the current environment
module.exports =currentDB;