const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const users = require("./routes/api/users");
const Countries = require('./routes/api/Counties');
const Areas = require('./routes/api/Areas');
const Categories = require('./routes/api/Category');
const Ads = require('./routes/api/Ads');
const sub = require('./routes/api/subCategory');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const fs = require('fs');

const port = 5000;

//middlewares being used
app.use(fileUpload());
app.use(cors())
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.get('/', (req, res ) => {
    res.send('Hello Bhaa')
}) 



const DB = require('./config/config').mongoURI;


mongoose.connect(DB, {useUnifiedTopology: true})
    .then(() => console.log('DB Connnected'))
    .catch(Err => console.log(Err))



// mongoose.connect('mongodb://127.0.0.1:27017/countries', { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once('open', function() {
//     console.log("MongoDB up and running!");
// }).catch(err => console.log('err'))


//uploadfile
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const date = Date.now();
  let file = req.files.file;
  let fileName = file.name.split('.');
  let actualFileName = fileName[0] + date + '.' +fileName[1];
  console.log(fileName[1])
  // fs.renameSync()
  file.mv(`${__dirname}/../client/public/uploads/${actualFileName}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});


app.use(passport.initialize());
require("./config/passport")(passport);



//routes
app.use('/api/countries', Countries);
app.use('/api/categories', Categories);
app.use('/api/ads', Ads);
app.use('/api/areas', Areas);
app.use('/api/users', users);
app.use('/api/subs', sub);
// app.post('')




    app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
})