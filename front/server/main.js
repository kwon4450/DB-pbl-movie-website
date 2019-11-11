import express from 'express';

const app = express();

let port = 3000;

app.use('/', express.static(__dirname + '/../public'));

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});