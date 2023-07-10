const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.connect('mongodb+srv://diya:<password>@cluster0.zfjfls0.mongodb.net/profiles?retryWrites=true&w=majority');
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());
app.use('/profile', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


