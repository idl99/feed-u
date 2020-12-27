module.exports = function (grunt) {

    grunt.initConfig({
        clean: ['dist/'], // Deletes the dist folder to start from a clean state
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
        },
        connect: { // Starts a static file server
            server: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    base: 'dist',
                    livereload: true
                }
            }
        },
        sync: {
            // Keeps directories in sync and
            // compared to grunt-contrib-copy, sync only copies newly changed files
            // Refer https://www.webfoobar.com/node/78 for more
            main: {
                files: [
                    { expand: true, cwd: 'src/', src: ['pages/*'], dest: 'dist' },
                    { expand: true, cwd: 'src/', src: ['assets/**'], dest: 'dist' }
                ],
                verbose: true // Display log messages when copying files
                // pretend: true, // This option prevents any IO. dry run.
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['src/scripts/*.js'],
                tasks: ['browserify']
            },
            css: {
                files: ['src/styles/*.sass'],
                tasks: ['sass']
            },
            html: {
                files: ['src/pages/*.html'],
                tasks: ['sync']
            },
            assets: {
                files: ['src/assets/**'],
                tasks: ['sync']
            }
        },
    });

    // https://gruntjs.com/plugins
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sync');

    // Default task
    grunt.registerTask('build', ['clean', 'sync', 'sass', 'browserify']);
    grunt.registerTask('dev', ['build', 'connect', 'watch']);

};