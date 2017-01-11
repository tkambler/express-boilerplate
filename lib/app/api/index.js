'use strict';

const Promise = require('bluebird');
const log = require('app/log');
const config = require('app/config');
const express = require('express');
const meddleware = require('meddleware');
const app = express();
let server;

app.on('middleware:after', (e) => {
    log.info(`Registered middleware: ${e.config.name}`);
});

app.use(require('app/api/middleware/morgan'));
app.use(meddleware(config.get('meddleware')));

module.exports = () => {
    return new Promise((resolve, reject) => {
        server = app.listen(config.get('api:port'), (err) => {
            if (err) return reject(err);
            log.info(`Application is listening on port: ${config.get('api:port')}`);
            module.exports = server;
            return resolve(server);
        });
    });
};
