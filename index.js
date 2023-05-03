const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const data = require('./data/data.json');

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/data', (req, res) => {
    res.send(data)
});

app.listen(port, () => {
    console.log(`Chef api is running on port: ${port}`)
})