/**
 * Created by Ori Iscovici on 1/22/2017.
 */
var express = require('express');
var app = express();
var router = express.Router();

//////////////////////////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://Sylvester:071071@ds127429.mlab.com:27429/news_app_db');
var News = require('./../models/NewsSchema');
///////////////////////////////////

router.get('/', (req, res) => {
    // get all the users
    News.find({}, function(err, news) {
    //if (err) throw err;

    // object of all the news
    //console.log(news);
    res.send(news);
});
});

router.post('/addNews', (req, res) => {
    //create a new news
    var new_news = News({
        newsHeadline: req.body.newsHeadline,
        category: req.body.category,
        newsTeaser: req.body.newsTeaser,
        newsContent: req.body.newsContent,
        newsImageUrl: req.body.newsImageUrl
    });


//save the news
new_news.save(function(err) {
    if (err) throw err;
    res.sendStatus(200);
});
});

router.put('/updateNews', (req, res) => {
    //will receive id from req.body
    let $id = '5884f18f5df3583714a10629';

if ($id){
    // get a user with ID of $id
    News.findById($id, function(err, news) {
        if (err) throw err;

        // change the news headline
        news.newsHeadline = 'uk';

        // save the user
        news.save(function(err) {
            if (err) throw err;

            res.sendStatus(200);
        });
    });
}
});

router.delete('/deleteNews', (req, res) => {
    //will receive id from req.body
    let $id = '5884f18f5df3583714a10629';
if ($id){
    News.findById($id, function(err, news) {
        if (err) throw err;

        // delete him
        news.remove(function(err) {
            if (err) throw err;

            res.sendStatus(200);
        });
    });
}
});

module.exports = router;