'use strict';

module.exports = (grunt) => {

    return grunt.registerTask('set-log-level', function() {

        const done = this.async();
        const client = require('app/ipc/client');
        const validLevels = [
            'error', 'warn', 'info', 'debug', 'trace'
        ];

        if (validLevels.indexOf(grunt.option('level')) === -1) {
            return grunt.fatal(new Error(`Invalid log level: ${grunt.option('level')}`));
        }

        grunt.log.writeln(`Setting log level to: ${grunt.option('level')}`);

        client.setLogLevel(grunt.option('level'), (res) => {
            return done();
        });

    });

};
