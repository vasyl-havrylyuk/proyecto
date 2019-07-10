const mysql1 = require('mysql'); 
const con = require('../mysql').con;


function getUsers(req, res, next) {
    var sql = 'SELECT * FROM user';

    con.query(sql, function(err, data) {
        if (err) throw err;
        res.send(data);
    });
}


function getUser(req, res, next) {
    res.send();
}

module.exports = {
    getUsers, getUser
}