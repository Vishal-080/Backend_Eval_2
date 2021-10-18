const express = require('express');
const {register,login} = require('./controllers/userAuth.controllers');
const app = express();
app.use(express.json());

app.post("/users",register);
app.post("/login",login);

module.exports = app;