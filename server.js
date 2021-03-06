
/**
 * Created by Ori Iscovici on 1/22/2017.
 */
global.BASE_PATH = __dirname;
const express = require('express');
const cors = require('cors');
const app = express();
//allow cors
app.use(cors());
const bodyParser = require('body-parser');

const port = 5000;

app.set('view engine', 'html');
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.listen( process.env.PORT || port, function(){

   console.log('listening on port ' + port);
});

const news = require('./modules/controllers/newsController');
app.use('/news', news);

app.get('/', (req, res) => {
    res.render(BASE_PATH + 'public/index.html')
});

