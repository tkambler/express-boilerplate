'use strict';

const Promise = require('bluebird');
const config = require('app/config');
const express = require('express');
const meddleware = require('meddleware');
const app = express();
let server;

app.use(meddleware(config.get('meddleware')));

module.exports = () => {
    return new Promise((resolve, reject) => {
        server = app.listen(config.get('api:port'), (err) => {
            if (err) return reject(err);
            console.log('API is listening on port: %s', config.get('api:port'));
            module.exports = server;
            return resolve(server);
        });
    });
};
