const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Library")

app.use('/api', userRoutes);

app.listen(8000, () =>{
    console.log("Server Running at http://localhost:8000")
})