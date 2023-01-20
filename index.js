require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
let helmet = require('helmet');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());
app.set("view engine", "ejs");
app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/css', express.static('css'))

const routes = require('./routes/routes.js');
const userLogin = require('./routes/userLogin.js')

app.use('/', userLogin)
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})