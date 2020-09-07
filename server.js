const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};
const db = require('./app/models');

db.sequelize.sync(() => {console.log("db drop and re-sync")})

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.json({message: 'Welcome to my tutorial application.'});
});
//require('./app/routes/user.routes')(app);
require('./app/routes/tutorial.routes')(app);
/* app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
}) */

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;