var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
            //options: {
            //    paths: {
            //        'appFiles': 'app/protected/tabs/*.js'
            //    },
            //    removeCombined: true,
            //    out: 'app/requirejs/MainMin.js',
            //    optimize: 'none',
            //    name: 'main'
            //},
            options: {
                paths: {
                    'appFiles': 'app/protected/error/*.js'
                },
                removeCombined: true,
                out: 'app/requirejs/error.js',
                optimize: 'none',
                name: 'error'
            },
            dev:{
                options:{
                    optimize:'none'
                }
            },
            release:{
                options:{
                    optimize:'uglify'
                }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('dev',['requirejs:dev']);
    grunt.registerTask('release',['requirejs:release']);
};