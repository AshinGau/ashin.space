module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    cleancss: true
                },
                files: {
                    "public/css/nano-bootstrap.css1.1.0": "public/less/bootstrap.less",
                    "public/css/nano-bootstrap.patch.css1.1.0": "public/less/patch.less",
                    "public/css/ashin.css": "public/less/ashin.less"
                }
            }          
        },
        watch: {
            files: ['public/less/*.less','public/less/mixins/*.less'],
            tasks: ['less'],
            options: {
                spawn: false,
            }
        }
    });
    
    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less','watch']);

}