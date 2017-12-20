module.exports=function(grunt){
   
    grunt.initConfig({
        
        concat: {
            js: {
              src: ['app/bower_components/angular/angular.js', 'app/bower_components/angular-route/angular-route.js', 'app/app.js','app/view1/view1.js','app/view2/view2.js'],
              dest: 'app/dist/common.js',
            },
            css: {
              src: ['app/bower_components/bootstrap/dist/css/bootstrap.min.css', 'app/app.css'],
              dest: 'app/dist/styles.css',
            },
          },
          uglify: {
            prod: {
              // production server minify config
              
                files: {
                  'app/dist/common.min.js': ['app/dist/common.js']
                }
            }
          },
          processhtml: {
            prod:{
              files: {
                'app/dist/index.html' : ['app/index.html'],
            }
          }
        }
      });
    // in dev, concat only
    //grunt.registerTask('default', ['concat']);
    
    // on production, concat and minify
    grunt.registerTask('prod', ['concat','uglify','processhtml']);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-processhtml');
}