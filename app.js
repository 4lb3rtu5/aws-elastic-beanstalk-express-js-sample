const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Ahora vamos a colocar un segundo texto para su revision'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
