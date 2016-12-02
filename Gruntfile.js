'use strict';

Object.defineProperties(GLOBAL, {
    'APPDIR': {
        'value': __dirname
    }
});

const LOCAL_CONFIG_FILE = './Grunt.local-config.json';
let prettyjson = require('prettyjson');

module.exports = function(grunt) {

    grunt.prettyjson = function(data) {
        console.log(prettyjson.render(data, {
        }));
    };

    grunt.verbose.prettyjson = function(data) {
        if (!grunt.option('verbose')) return;
        console.log(prettyjson.render(data, {
        }));
    };

    if (grunt.file.exists(LOCAL_CONFIG_FILE)) {
        grunt.config.init(require(LOCAL_CONFIG_FILE));
    }

    grunt.loadTasks('tasks');
    grunt.task.run(['load-config', 'load-ipc-client']);

};
