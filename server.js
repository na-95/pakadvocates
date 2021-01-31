// Server intitial configuration:

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const cors = require('cors');
var allowedOrigins = ['http://localhost:3000', 'http://localhost:5000'];
app.use(cors({
    origin: function(origin, callback){
        
        if(!origin) return callback(null, true); // allow requests with no origin (like mobile apps or curl requests)
        
        if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
        return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

const port = 5000;

app.listen(port, ()=>{console.log(`Server started on port ${port}`)})






// importing and syncing (creating the actual) database:

const db = require('./app/models')

// db.sequelize.sync({ force: true })  //sync db
//     .then(() => {
//         console.log("Drop and re-create all tables.");
//     });









// API routes/endpoints with services:

app.use('/', require('./app/routes/Admin-routes'));