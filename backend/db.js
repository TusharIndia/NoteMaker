require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully');
};

module.exports = connectToMongo;