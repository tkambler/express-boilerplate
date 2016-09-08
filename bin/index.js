'use strict';
/* global APPDIR */

const path = require('path');

Object.defineProperties(global, {
    'APPDIR': {
        'value': path.resolve(__dirname, '..')
    }
});

require('app/config')(path.resolve(APPDIR, 'config'))
    .then((config) => {

        return require('app/api')();

    })
    .then((server) => {

        console.log('Server is ready.');

        process.on('SIGTERM', () => {
            console.log('SIGTERM received');
            server.close(() => {
                console.log('Server shutdown.');
                process.exit(0);
            });
        });

    });
