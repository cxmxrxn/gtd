const mongoose = require('mongoose')

const mongoEndpoint = 'mongodb://localhost/';
const dbName = 'gtddb';

mongoose
    .connect(mongoEndpoint + dbName)
    .then(() => console.log(`connected to ${dbName} db`))
    .catch((err) => console.log(`ERROR when connecting to ${dbName} db`, err));