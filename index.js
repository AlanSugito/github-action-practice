const express = require('express');

const app = express();

app.get('/', (_, res) => res.send('Hello Github Actions'));
app.get('/action', (_, res) => res.send('This is actions'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('Server listening at port: ' + PORT));
