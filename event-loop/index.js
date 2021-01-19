// I am a child, I am going to act like a server
// and do nothing else
const express = require('express');
const crypto = require('crypto');
const app = express();
const { Worker } = require('worker_threads');

app.get('/', (req, res, next) => {
    const worker = new Worker(function () {

    });
    worker.on('message', function() {});
    worker.postMessage({});
});

app.get('/fast', (req, res, next) => {
    res.send('This was fast');
});

app.listen(3000);