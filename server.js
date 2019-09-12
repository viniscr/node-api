const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true, useNewUrlParser: true } 
);

requireDir('./scr/models');

// Rotas
app.use('/api', require("./scr/routes"));

app.listen(3001);