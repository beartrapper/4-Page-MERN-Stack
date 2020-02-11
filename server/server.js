const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Countries = require('./routes/api/Counties');

const port = 5000;

app.use(bodyParser.json());

app.get('/', (req, res ) => {
    res.send('Hello Bhaa')
})




const DB = require('./config/config').mongoURI;


mongoose.connect(DB, {useUnifiedTopology: true})
    .then(() => console.log('DB Connnected'))
    .catch(Err => console.log(Err))

app.use('/api/countries', Countries);


    app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
})