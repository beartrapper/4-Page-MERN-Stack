const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Countries = require('./routes/api/Counties');
const Areas = require('./routes/api/Areas');
var cors = require('cors')



const port = 5000;

//middlewares being used
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res ) => {
    res.send('Hello Bhaa')
})




const DB = require('./config/config').mongoURI;


mongoose.connect(DB, {useUnifiedTopology: true})
    .then(() => console.log('DB Connnected'))
    .catch(Err => console.log(Err))



//routes
app.use('/api/countries', Countries);
app.use('/api/areas', Areas);



    app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
})