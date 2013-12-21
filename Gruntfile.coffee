###
  Grunt workflow: for Compass & Webfonts
###

mountFolder = (connect, dir) ->
    return connect.static(require('path').resolve(dir))

module.exports = (grunt) ->
    @loadNpmTasks('grunt-contrib-compass')
    @loadNpmTasks('grunt-contrib-copy')
    @loadNpmTasks('grunt-contrib-watch')
    @loadNpmTasks('grunt-contrib-uglify')
    @loadNpmTasks('grunt-contrib-concat')
    @loadNpmTasks('grunt-contrib-cssmin')
    @loadNpmTasks('grunt-webfont')

    @initConfig
        doWatch:
            css:
                files: ['scss/**/*.scss']
                tasks: ['compass']
            iconsapp:
                files: ['images/icons_svg_source/app/*.svg']
                tasks: ['webfont']
            iconsandroid:
                files: ['images/icons_svg_source/android/*.svg']
                tasks: ['webfont']
            iconsios:
                files: ['images/icons_svg_source/ios/*.svg']
                tasks: ['webfont']

        # generate 3 webfonts, one for Android system, once for iOS system, one for the app itself
        webfont:
            iconsapp:
                src: 'images/icons_svg_source/app/*.svg'
                dest: 'fonts'
                destCss: 'scss/clank/icon-fonts'
                options:
                    font: 'app-icons'
                    hashes: false
                    htmlDemo: false
                    stylesheet: 'scss'
                    relativeFontPath: '../fonts'
                    template: 'font-generation-templates/custom-app.css'
            iconsandroid:
                src: 'images/icons_svg_source/android/*.svg'
                dest: 'fonts'
                destCss: 'scss/clank/icon-fonts'
                options:
                    font: 'android-icons'
                    hashes: false
                    htmlDemo: false
                    stylesheet: 'scss'
                    relativeFontPath: '../fonts'
                    template: 'font-generation-templates/custom-android.css'
            iconsios:
                src: 'images/icons_svg_source/ios/*.svg'
                dest: 'fonts'
                destCss: 'scss/clank/icon-fonts'
                options:
                    font: 'ios-icons'
                    hashes: false
                    htmlDemo: false
                    stylesheet: 'scss'
                    relativeFontPath: '../fonts'
                    template: 'font-generation-templates/custom-ios.css'

        compass:
            all:
                options:
                    sassDir: 'scss'
                    cssDir: 'css'

        pkg: grunt.file.readJSON('package.json')

        concat:
            options:
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
            dist:
                src: ['js/clank/ratchet/fingerblast.js', 'js/clank/ratchet/sliders.js', 'js/clank/ratchet/toggles.js', 'js/clank/clank.js', 'js/clank/stateloader.js']
                dest: 'dist/clank.js'

        uglify:
            options:
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
            all:
                files:
                    'dist/clank.min.js': ['dist/clank.js']

        cssmin:
            add_banner:
                options:
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
                files:
                    'dist/clank.min.css': ['css/clank.css']

    @renameTask 'watch', 'doWatch'
    @registerTask('watch', ['compass', 'doWatch'])
    @registerTask('build', ['compass', 'concat', 'uglify', 'cssmin'])
    @registerTask('default', ['build'])