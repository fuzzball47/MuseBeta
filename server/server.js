'use strict';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// remove soon
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const DB_CONNECTION = 'musedb';
mongoose.connect(`mongodb://localhost/${DB_CONNECTION}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

mongoose.connection.once('open', () => {
    console.log(`connection has been established to ${DB_CONNECTION}`);
}).on('err', err => {
    console.log('Connection Error: ' + err);
});

const dashboardRouter = require('./routes/dashboard');
const homeRouter = require('./routes/home');
const profileRouter = require('./routes/profile');
const createRouter = require('./routes/create');

const devRouter = require('./routes/dev');
app.use('/dev', devRouter);

app.use('/dashboard', dashboardRouter);
app.use('/home', homeRouter);
app.use('/profile', profileRouter);
app.use('/create', createRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});