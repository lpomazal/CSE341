const path = require('path');
const express = require('express');
const routes = require('./routes');
const cors = require('cors') // Place this with other requires (like 'path' and 'express')
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('../routes/admin');
const shpRoutes = require('../routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);

const corsOptions = {
    origin: "https://lpomazalcse341.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
     // This should be your user handling code implement following the course videos
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://lpomazal:school2022@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";