const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./models/dataSchema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://tindclone:tindclone@cluster0.gbvrll9.mongodb.net/', { useNewUrlParser: true });

app.post('/newuser', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const formData = new User({
        email: email,
        password: password
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch (err) {
        console.log(err)
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});