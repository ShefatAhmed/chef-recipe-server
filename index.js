const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.listen(port, () => {
    console.log(`Chef api is running on port: ${port}`)
})