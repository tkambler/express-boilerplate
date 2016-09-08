'use strict';

const confit = require('confit');
const Promise = require('bluebird');
const handlers = require('shortstop-handlers');

module.exports = function(configDir) {
    let config = Promise.promisifyAll(confit({
        'basedir': configDir,
        'protocols': {
            'require': handlers.require(configDir),
            'path': handlers.path(configDir),
            'glob': handlers.glob(configDir),
            'env': handlers.env()
        }
    }));
    return config.createAsync()
        .then((conf) => {
            module.exports = conf;
            return conf;
        });
};
