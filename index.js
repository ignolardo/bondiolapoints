const express = require("express");
const app = express();
const myApp = require('./app').app;

// Middlewares
app.use(myApp);
