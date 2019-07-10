const express = require('express');
const app = express();

const UsersRoutes = require('./app/routes/users.routes');
const TablesRoutes = require('./app/routes/tables.routes');

app.use('/api', [UsersRoutes]);

app.listen(3000, 'localhost');