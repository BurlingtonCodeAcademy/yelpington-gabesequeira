const express = require('express');
const path = require('path');
let fetch = require('isomorphic-unfetch');
const { response } = require('express');
const public = path.resolve('./public');
const port = process.env.PORT || 8080

const app = express();
// app.use(bodyParser.urlEncoded({ extended: true }));


app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(public + '/index.html')
});

app.get('/api/all', (req, res) => {
    res.sendFile(public + '/api/all.json')
});

app.get('/restaurant', (req, res) => {
    res.sendFile(public + '/restaurant.html');
});





app.listen(port, () => console.log(`Example app listening port ${port}!`));