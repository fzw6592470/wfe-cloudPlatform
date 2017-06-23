module.exports = function(grunt){
  
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        // Task htmlmin
        htmlmin : {
            dist : {
                options : {
                    removeComments : true, //去注释
                    collapseWhitespace : true //去换行
                },
                files : { // Dictionary of files
                    //"dist/html/login.html" : "src/html/login.html",
                    "dist/html/index.html" : "src/html/index.html",
                    //"dist/html/register.html" : "src/html/register.html",
                    //"dist/html/vlogin.html" : "src/html/vlogin.html",
                    //"dist/html/paymentpwd.html" : "src/html/paymentpwd.html",
                    //"dist/html/user.html" : "src/html/user.html",
                    //"dist/html/carmanage.html" : "src/html/carmanage.html",
                    //"dist/html/caradd.html" : "src/html/caradd.html",
                    //"dist/html/order.html" : "src/html/order.html",
                    //"dist/html/success.html" : "src/html/success.html",
                    //"dist/html/charge.html" : "src/html/charge.html",
                    //"dist/html/passwordmanage.html" : "src/html/passwordmanage.html",
                    //"dist/html/passwordmsgsend.html" : "src/html/passwordmsgsend.html",
                    //"dist/html/passwordmemset.html" : "src/html/passwordmemset.html",
                    //"dist/html/passwordmemreset.html" : "src/html/passwordmemreset.html",
                    //"dist/html/bill.html" : "src/html/bill.html",
                    //"dist/html/record.html" : "src/html/record.html",
                    //"dist/html/road.html" : "src/html/road.html",
                    //"dist/html/auto.html" : "src/html/auto.html"
                }
            }
        },
        // Task ts
        ts : {
            default : {
                src: ["**/*.ts", "!node_modules/**/*.ts"]
            }
        },
        // Task sass
        sass : {
            dist : {
                options : {
                    style : "expanded"
                },
                files : {
                    "src/css/base.css" : "src/css/base.scss",
                    "src/css/parking.css" : "src/css/parking.scss",
                    "src/css/auto.css" : "src/css/auto.scss"
                }
            }
        },
        // Task cssc
        cssc : {
            build : {
                options : {
                    consolidateViaDeclarations : true,
                    consolidateViaSelectors : true,
                    consolidateMediaQueries : true
                },
                files : {
                    "dist/css/bolin.css" : ["src/css/parking.css"],
                    "dist/css/auto.css" : ["src/css/auto.css"]
                }
            }
        },
        // Task cssmin
        cssmin : {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/bolin.min.css': 'src/css/bolin.css'
                }
            }
        },
        // Task imagemin
        imagemin: {                          // Task 
            dist: {                          // Target 
                options: {                       // Target options 
                    optimizationLevel: 3,
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion 
                    cwd: 'src/',                   // Src matches are relative to this path 
                    src: ['**/*.{gif,jpg,png}'],   // Actual patterns to match 
                    dest: 'build/'                  // Destination path prefix 
                }]
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: {
                    'build/js/<%= pkg.name %>.js': 'src/js/<%= pkg.name %>.js'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                options: {
                    mangle: false, //不混淆变量名
                    preserveComments: 'false'  //all不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                },
                files: {
                    'dist/js/bolin.min.js' : ['dist/js/app/cuiParkLib.js']
                }
                //src: ['src/js/jquery.ztree.core.js','build/js/<%= pkg.name %>.js'],
                //dest: 'build/js/<%= pkg.name %>.min.js'
            }
        }
        //uglify: {
        //    my_target: {
        //        files: [{
        //            expand: true,
        //            cwd: 'src/js',
        //            src: '**/*.js',
        //            dest: 'dest/js'
        //        }]
        //    }
        //}
  
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-cssc');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ['babel','uglify','cssmin','htmlmin']);
    grunt.registerTask('build',['htmlmin']);
    grunt.registerTask('ys',['htmlmin','uglify','sass','cssc','cssmin']);
    // grunt.registerTask('foo','This is test foo',function(){
    //     grunt.log.writeln("start foo task.");

    //     grunt.task.run(["imagemin"]);
    // })

}
