'use strict';
/* global APPDIR */

const FileStreamRotator = require('file-stream-rotator')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const config = require('app/config');
const logDirectory = path.join(APPDIR, 'request-logs');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = FileStreamRotator.getStream({
    'date_format': 'YYYYMMDD',
    'filename': path.join(logDirectory, 'access-%DATE%.log'),
    'frequency': 'daily',
    'verbose': false
});

module.exports = morgan('combined', {
    'stream': accessLogStream
});
