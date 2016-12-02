'use strict';

const dnode = require('dnode');
const config = require('app/config');
const log = require('app/log');

const server = dnode({
    'setLogLevel': (level, cb) => {
        log.info(`Setting log level: ${level}`);
        log.transports.console.level = level;
        return cb();
    }
});

log.info(`Creating IPC server on port: ${config.get('ipc:port')}`);

server.listen(config.get('ipc:port'));

module.exports = server;
