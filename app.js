const express = require('express');
const app = express();

app.use(express.static('assets'));

const config = require('config-lite')(__dirname);


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

const port = process.env.PORT || config.port;
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
