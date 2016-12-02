'use strict';
/* GLOBAL APPDIR */

module.exports = (grunt) => {

    const path = require('path');
    let loaded = false;

    return grunt.registerTask('load-config', function() {

        if (loaded) return;

        const done = this.async();

        require('app/config')(path.resolve(APPDIR, 'config'))
            .tap(() => {
                loaded = true;
            })
            .then(done)
            .catch(grunt.fatal);

    });

};
