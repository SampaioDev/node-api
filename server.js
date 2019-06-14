//Framework JS
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();
app.use(cors());
//Permitir enviar dados para aplicação com formato JSON.
app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true}
);
requireDir('./src/models');

app.use('/api', require("./src/routes"));

app.listen(3001);