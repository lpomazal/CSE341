const express = require('express');

const app = expres();

// app.use((req, res, next)=> {
//     console.long('First Middllewere');
//     next();
// });
// app.use((req, res, next)=> {
//     console.long('Second Middllewere');
//     res.send(<p>'Assignment Solved (almost!)'</p>);
// });
app.use('/users',(req, res, next) =>{
    console.log('/ middleware');
    res.send('<p>The Middleweare that handles just /users</p>');
});

app.use('/',(req, res, next) =>{
    console.log('/ middleware');
    res.send('<p>The Middleweare that handles just /</p>');
});


app.listen(4000);