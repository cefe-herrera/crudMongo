const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const PeopleRouter = require('./people/routes.config')


const app = express();
const router = express.Router();


const port = process.env.PORT || 3001;

PeopleRouter.routesConfig(router);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

