'use strict';

const morgan = require('morgan');
const log = require('app/log');

module.exports = morgan('combined', {
    'stream': log.stream
});
