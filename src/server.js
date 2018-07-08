const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello world Jenkins!');
});

app.get('/demo-service', (request, response) => {
    response.json([]);
});

app.listen(3000);
