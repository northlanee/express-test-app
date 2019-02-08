const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.get('/api', (req, res) => {
    res.send([1, 2, 3]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server on ${port} port`);
});