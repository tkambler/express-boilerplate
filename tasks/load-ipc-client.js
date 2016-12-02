'use strict';
/* GLOBAL APPDIR */

module.exports = (grunt) => {

    const path = require('path');
    let loaded = false;

    return grunt.registerTask('load-ipc-client', function() {

        if (loaded) return;

        const done = this.async();

        return require('app/ipc/client')()
            .then(() => {
                return done();
            })
            .catch(grunt.fatal);

    });

};
