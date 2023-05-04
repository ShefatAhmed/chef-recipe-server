const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const data = require('./data/data.json');
app.use(cors())
app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/data', (req, res) => {
    res.send(data)
});

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const detailData = data.filter(n => n.id === id);
    res.send(detailData)
});

app.listen(port, () => {
    console.log(`Chef api is running on port: ${port}`)
})