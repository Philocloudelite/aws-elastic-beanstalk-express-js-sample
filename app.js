const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('we are pros we want to see a change we are almost done!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
