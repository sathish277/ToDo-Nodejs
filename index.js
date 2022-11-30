const express = require('express');
const port = 8000;
const path=require('path');
const db = require('./config/mongoose'); 
const routes = require('./routes');
const app = express();


app.use(express.urlencoded({extended:true}));

//static files
app.use(express.static(__dirname + '/assets'));

//render views
app.set('view engine','ejs');
app.set('views','./views');
//user router
app.use('/',routes);

app.listen(port, function(err){
    if(err)
    {
        console.log(`Error while starting Server! with error: ${err}`);
        return;
    }
    console.log('Server is up and running on port:',port);
});