const express = require('express');
const app = express();

const UsersController = require('../controllers/users.controller');

app.get('/users', UsersController.getUsers);
app.get('/users/:id', UsersController.getUser);

module.exports = app;