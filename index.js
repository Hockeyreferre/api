require('dotenv').config();
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
let helmet = require('helmet');
const app = express();
app.use(cors())
app.use(express.json());
app.set("view engine", "ejs");
app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const u15routes = require('./routes/u15routes.js');
const ostseeligaRoutes = require('./routes/ostseeligaRoutes.js');
const userLogin = require('./routes/userLogin.js')

app.use('/', userLogin)
app.get('/ligaauswahl', async (req, res) => {
    res.render('ligaauswahl', { });
})
app.use('/u15', u15routes)
app.use('/ostseeliga', ostseeligaRoutes)

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})