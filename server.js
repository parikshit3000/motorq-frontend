require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded( {extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

// Ports
const port = process.env.PORT || 3001;
app.listen(port, (req, res) => {
    console.log(`Server started at port ${port}`);
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signin.html");
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.get('/events', (req, res) => {
    res.sendFile(__dirname + "/events.html");
});

app.get('/regevents', (req, res) => {
    res.sendFile(__dirname + "/regEvents.html");
});