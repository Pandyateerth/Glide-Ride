const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

connectToDb();


app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello Teerth Pandya');
});

app.use('/users', userRoutes);

module.exports = app;