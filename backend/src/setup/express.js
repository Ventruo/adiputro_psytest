const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.EXPRESS_PORT || 8080;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());


let url;
if (process.env.CLIENT_PORT) {
    url =
        (process.env.PROTOCOL || 'http') +
        '://' +
        (process.env.CLIENT_URL || '127.0.0.1') +
        ':' +
        (process.env.CLIENT_PORT || 5050);
} else {
    url = (process.env.PROTOCOL || 'http') + '://' + process.env.CLIENT_URL;
}

app.use(
    cors({
        origin: [url, 'http://localhost:5050'],
        credentials: true,
    })
);

const initExpress = () => {
    app.listen(PORT, () => {
        console.log(`Server started on ${url}`);
    });
}


module.exports = { app, initExpress };