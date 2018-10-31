'use strict'

// Importing Modules from Node
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

//Creating environment variables.
const PORT = process.env.PORT || 44325;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(bodyParser.json(),cors());

app.use(require('../route/auth-router'));

app.all('*', (request, response) => {
    console.log('Returning a 404 from the catch-all route');
    return response.sendStatus(404);
});

app.use(require('./error-middleware'));

export const start = () => {
    app.listen(PORT, () => {
        console.log('Listening on port: ${PORT}')
    })
}

export const stop = () => {
    app.close(PORT, () => {
        console.log('Shut down on port: ${PORT}');
    })
}