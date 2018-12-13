let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let app = express();
let apiRoutes = require("./api-routes")

app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());

 var port = process.env.PORT || 1234;
 
 mongoose.connect('mongodb://127.0.0.1:27017');
 var db = mongoose.connection;

app.get('/', (req, res) => res.send('home'));

app.use('/api', apiRoutes)

app.listen(port, function() {
    console.log("Running https server on port " + port);
})
