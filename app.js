
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const flash = require('express-flash');



var port = process.env.PORT || 8080;


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressSession({ secret:'max', saveUninitialized: false, resave: false }));
app.use(flash());
app.use('/assets', express.static('assets')); // This line.


const routes = require('./routes/routes');
app.use('/',routes);



 //start server 
app.listen(port, () => {
    console.log("Server started on port: " + port);
});