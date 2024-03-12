const mongoConnection = require('./util/mongoConnection');

const listingsAndReviews_col_name = 'listingsAndReviews';

async function main() {
    try {
        await mongoConnection.connectToMongo();

        const db = await mongoConnection.getDb();
        const col_listingsAndReviews = db.collection(listingsAndReviews_col_name);

        const query_docs = col_listingsAndReviews.find({ }).project({name: 1, summary: 1}).limit(5);

        for await (const doc of query_docs) {
            console.log(doc);
        }

    } catch(err) {
        console.log(err);
    } finally {
        await mongoConnection.disconnectFromMongo();
    }
}

main();