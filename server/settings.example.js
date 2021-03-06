// this file contains the example for the configurations necessary for the server
// Copy this file and name it settings.js, and replace the examples with you own settings.

// dabatase name inside the cluster.
const dbName = 'ez-linter';

// name of collection that stores configurations
const configsCollection = 'configs';

// connection string for MongoDB. If using MongoDB Atlas, use the string given
// by clicking on cluster -> connect -> "connect using mongodb compass"
// !!Don't forget to substitute usename and password
const MONGO_URI = 'mongodb+srv://<user>:<password>@<cluster>.3ybta.mongodb.net/ez-linter';

// github oauth (get these from Github; they are strings made up of random numbers and letters)
const client_id = '';
const client_secret = '';

// sessionController (random string you generate yourself)
// ex: 'cohort23IsBestCohort'
const jwtSecretKey = '';

// secretCookieController (random string you generate yourself)
// ex: 'oopsIMean21'
const cjsSecretKey = '';
// set sessionLifespan to
  // null - if you want the cookie to last until user closes their browser
  // an integer - the amount of minutes you want the cookie to last
const sessionLifespan = null;

module.exports = {
  MONGO_URI,
  dbName,
  configsCollection,
  client_id,
  client_secret,
  jwtSecretKey,
  cjsSecretKey,
  sessionLifespan
}
