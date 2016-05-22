'use strict';

module.exports = function (grunt) {

    //grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({

        express: {

            options : {
                port: 3000
            },

            dev: {
                options:{
                    script: 'server.js'
                }
            }
        },

        watch: {

            options: {
                livereload: true,
                spawn: false
            },

            sass: {
                files: ['public/scss/**/*.{scss,sass}'],
                tasks: ['sass'],
                options: {
                  livereload: true,
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    debugInfo: false,
                    sourcemap: false
                },
                files: {
                    'public/css/main.css': 'public/scss/main.scss'
                }
            }
        }

    });

    grunt.registerTask('build', function (target) {
        grunt.task.run([
            'sass',
            'express:dev',
    		'watch'
        ]);
    });

    grunt.registerTask('styles', function (target) {
        grunt.task.run([
            'sass'
        ]);
    });

};