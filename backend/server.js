const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const profileController = require('./controller/profileController');


dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("MongoDB connected"));

app.use(express.json())
app.use(cors())

app.get('/getProfile', profileController.getProfile, (req, res) => {
  res.status(200).json(res.locals.allProfiles);
});

app.post('/postProfile', profileController.postProfile, (req, res) => {
  res.status(200).json(res.locals.newProfile);
});

app.put('/', (req, res) => {
  res.send("PUT Request Called")
})

app.listen(4000, () => {
  console.log('Server is running on 4000');
})