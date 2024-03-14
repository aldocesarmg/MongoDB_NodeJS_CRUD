const { app, port } = require('./api/server');
const mongoConnection = require('./util/mongoConnection');

try {
    app.listen(port, () => {
        mongoConnection.connectToMongo();
        console.log('Server is running...')
    });
} catch (anyError) {
    console.error(anyError);
} finally {
    mongoConnection.disconnectFromMongo();
}

// main();