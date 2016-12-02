'use strict';
/* global APPDIR */

const path = require('path');
const log = require('app/log');

Object.defineProperties(global, {
    'APPDIR': {
        'value': path.resolve(__dirname, '..')
    }
});

require('app/config')(path.resolve(APPDIR, 'config'))
    .then((config) => {

        log.info(`Bringing application on-line: ${config.get('name')}`);

    })
    .then(() => {
        return require('app/ipc/server');
    })
    .then(() => {
        return require('app/api')();
    })
    .then((server) => {

        require('app/ipc/client');

        log.info(`Application is ready.`);

        process.on('SIGTERM', () => {
            log.info(`SIGTERM received`);
            server.close(() => {
                log.info(`Application has shutdown.`);
                process.exit(0);
            });
        });

    });
