const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');
require('dotenv').config();

connectToMongo();
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

//Available routes
app.use('/api/auth',require('./routes/auth'))
// console.log(process.env);
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
}) 