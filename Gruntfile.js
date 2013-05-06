module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'jsmin-sourcemap': {
            all: {
		options: {
		      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    	},
                // Source files to concatenate and minify (also accepts a string and minimatch items)
                src: [
                    'app/lib/jquery/jquery-2.0.0.js',
                    'app/js/main.js',
                    //'app/lib/ace/*.js',
                    'app/lib/angular/angular.js',
                    'app/lib/angular-ui/angular-ui.js',
                    'app/js/app.js',
                    'app/js/services.js',
                    'app/js/controllers.js',
                    'app/js/filters.js',
                    'app/js/directives.js',
                    'app/lib/showdown.js'
                ],

                // Destination for concatenated/minified JavaScript
                dest: 'app/js/<%= pkg.name %>.min.js',

                // Destination for sourcemap of minified JavaScript
                destMap: 'all.js.map'
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
    grunt.registerTask('default', ['jsmin-sourcemap']);

};
