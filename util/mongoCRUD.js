let mongoConnection = require('./mongoConnection');

const LAR_collectionName = 'listingsAndReviews';

async function getListings() {
    const db = await mongoConnection.getDb();
    const LAR_collection = db.collection(LAR_collectionName);

    const query_docs = LAR_collection.find({ }).project({name: 1, summary: 1}).limit(5);
    
    return query_docs;
}

async function main() {
    try {
        await mongoConnection.connectToMongo();

        const db = await mongoConnection.getDb();
        const LAR_collection = db.collection(LAR_collectionName);

        const query_docs = LAR_collection.find({ }).project({name: 1, summary: 1}).limit(5);

        for await (const doc of query_docs) {
            console.log(doc);
        }

    } catch(err) {
        console.log(err);
    } finally {
        await mongoConnection.disconnectFromMongo();
    }
}

module.exports = getListings;