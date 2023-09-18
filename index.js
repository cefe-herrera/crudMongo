const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

//const mongoose = require("../../common/services/mongoose.service").mongoose;
const mongoose = require("./common/services/mongoose.service").mongoose;



const app = express();


const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

