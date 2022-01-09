const express = require('express');

const routes = require('./routes');

const app = express();
app.use('/', (req, res, next) =>{
    console.long('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) =>{
    console.long('In the middlewear!');
    res.send('<h1>the "Add product" Page</h1>');
});

app.use('/', (req, res, next) =>{
    console.long('In the middlewear!');
    res.send('<h1>Hello from Express!</h1>');
});


app.listen(4000);