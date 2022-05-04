const express = require('express');
const app = express();

const db = require("./app/models/sequelizeconnetion");

const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const pass = require("./app/middleWare/passport");

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const routes = require("./app/routes/Route");
app.use("/", routes);

const logger = require("./app/logger/logger");
app.use(require("./app/middleWare/response"));
app.use(require("./app/middleWare/error").handleJoiErrors);
app.use(require("./app/middleWare/error").handleErrors);

const port = process.env.PORT || 6000;
app.listen(port, () => logger.info(`Listening on port ${port}...`));
