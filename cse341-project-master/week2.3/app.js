const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

const users = [];

app.engine('hbs', expressHbs({defaultLayout: 'main-layout', extname:'hbs'}));
app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res, next) =>{
    res.render('index', {pageTitle:'Add User', users: users});
});

app.get('/users', (req, res, next) =>{
    res.render('users', {
    pageTitle: 'User', 
    users:users, 
    hasUsers: users.legnth > 0 });
});


app.post('/add-user', (req, res, next) =>{
    users.push({ name: req.body.username});
    res.redirect('/users');
});


app.listen(6000);

