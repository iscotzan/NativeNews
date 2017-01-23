/**
 * Created by Ori Iscovici on 1/22/2017.
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const port = 3000;

app.set('view engine', 'html');
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen( port, function(){

   console.log('listening on port ' + port);
});

const news = require('./modules/controllers/newsController');
app.use('/news', news);

app.get('/', (req, res) => {
    res.send('hello world')
});


