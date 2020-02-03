'use strict';
const mongoose = require('mongoose');

// Connect to db before test run
before(done => {
    // Connects to db creating if doesnt exist
    const db = 'MuseDB';
    mongoose.connect(`mongodb://localhost/${db}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

    mongoose.connection.once('open', () => {
        console.log(`connection has been established to ${db}`);
        done();
    }).on('err', err => {
        console.log('Connection Error: ' + err);
        done();
    });
});