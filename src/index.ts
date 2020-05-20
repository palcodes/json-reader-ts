import express from "express";

// this helps read any .json files within the directory and grab the data.
import * as data from './mcqs.json';

const app = express();

// API -> show JSON data in the browser
app.get('/json', (req, res) => {
    res.send(data.default);
});

// Server runner
app.listen(3000, () => {
    console.log('Server Running..');
});

