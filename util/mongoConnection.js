const { MongoClient } = require('mongodb');
const URL = require('../auth/mongodb_credentials');

const client = new MongoClient(URL);
const dbName = 'sample_airbnb';

let currentDb;

async function connectToMongo() {
    await client.connect((err) => {
        console.log('Connected to MongoDB');
    })
    currentDb = client.db(dbName);
}

async function disconnectFromMongo() {
    await client.close();
}

async function getDb() {
    return currentDb;
}

module.exports = { connectToMongo, disconnectFromMongo, getDb };