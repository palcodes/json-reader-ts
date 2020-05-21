import express from "express";

// this helps read any .json files within the directory and grab the data.
import * as data from './mcqs.json';

const app = express();

app.get('/', (req, res) => {
    res.send('home')
});

// API -> redirects localhost/goog to Google.com
app.get('/goog', (req, res) => {
    res.redirect('https://www.google.com/');
});

// API -> show JSON data in the browser
app.get('/json', (req, res) => {
    res.json(data.default);
});

// Server runner
app.listen(80, () => {
    console.log('Server Running..');
});

