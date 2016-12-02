'use strict';

const config = require('app/config');
const dnode = require('dnode');
const Promise = require('bluebird');
const client = dnode.connect(config.get('ipc:port'));

module.exports = () => {
    return new Promise((resolve, reject) => {
        client.on('remote', (remote) => {
            module.exports = remote;
            return resolve(remote);
        });
    });
};
