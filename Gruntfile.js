module.exports = function (grunt) {

    grunt.initConfig({
        clean: ['dist/'], // Deletes the dist folder to start from a clean state
        copy: { // Copies pages to the dist folder
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['pages/*'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'src/',
                    src: ['assets/*/*'],
                    dest: 'dist/'
                }]
            },
        },
        sass: { // Compiles SASS into CSS and copies them to the dist folder
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.sass'],
                    dest: 'dist/css/',
                    ext: '.css'
                }]
            }
        },
        browserify: { // Bundles the JS
            build: {
                // cwd: 'src/', // DO NOT USE THIS OPTION HERE. IT WILL MESS UP THE BUILD
                src: './src/scripts/index.js',
                dest: 'dist/bundle.js'
            }
        }
    });

    // https://gruntjs.com/plugins
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify')

    // Default task
    grunt.registerTask('default', ['clean', 'copy', 'sass', 'browserify']);

};