/**
 * Created by Ori Iscovici on 1/22/2017.
 */
/**
 * Created by Ori Iscovici on 1/22/2017.
 */
var express = require('express');
var app = express();
var router = express.Router();

//////////////////////////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/news_app_db');
var User = require('./../models/User');
///////////////////////////////////

router.get('/', (req, res) => {
    console.log('get homepage');
    // get all the users
    User.find({}, function(err, users) {
        if (err) throw err;

        // object of all the users
        console.log(users);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    // grab the user model

// create a new user
    var newUser = User({
        name: 'Peter Quill',
        username: 'starlord55',
        password: 'password',
        admin: true
    });

// save the user
    newUser.save(function(err) {
        if (err) throw err;

        console.log('User created!');
    });
});

module.exports = router;/**
 * Created by Ori Iscovici on 1/22/2017.
 */
