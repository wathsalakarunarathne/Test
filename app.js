//import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express(); 

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/shopping_cart');

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @ 21017');
});

//if error
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error in database connection:' + err);
    }
});

//port no
const port = 3000;

//adding middleware-cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));
 
//routes
app.use('/api', route);



//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port, () => {
    console.log('server started at port:' + port);

});