###
  Grunt workflow
###

mountFolder = (connect, dir) ->
    return connect.static(require('path').resolve(dir))

module.exports = (grunt) ->
    @loadNpmTasks('grunt-contrib-clean')
    @loadNpmTasks('grunt-contrib-compass')
    @loadNpmTasks('grunt-contrib-connect')
    @loadNpmTasks('grunt-contrib-copy')
    @loadNpmTasks('grunt-contrib-watch')
    @loadNpmTasks('grunt-jekyll')
    @loadNpmTasks('grunt-open')
    @loadNpmTasks('grunt-webfont')

    jekyllMask = '{*/,}{*/,}{*/,}*{html,js,png,jpg,jpeg}'

    @initConfig
        clean:
            dist: ['_site', '.tmp']
            afterjekyll: ['_site/node_modules', '_site/font-generation-templates', '_site/scss']

        doWatch:
            options:
                livereload: 35728
                nospawn: true
            iconsapp:
                files: ['images/icons_svg_source/app/*.svg']
                tasks: ['webfont', 'copy']
            iconsandroid:
                files: ['images/icons_svg_source/android/*.svg']
                tasks: ['webfont', 'copy']
            iconsios:
                files: ['images/icons_svg_source/ios/*.svg']
                tasks: ['webfont', 'copy']
            jekyll:
                files: [jekyllMask, '!_site/' + jekyllMask]
                tasks: ['jekyll', 'copy']
            compass:
                files: ['scss/{*/,}*.scss','scss/*/{*/,}*.scss']
                tasks: ['compass', 'copy']

        # generate 3 webfonts, one for Android system, once for iOS system, one for the app itself
        webfont:
            iconsapp:
                src: 'images/icons_svg_source/app/*.svg'
                dest: '.tmp/fonts'
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
                dest: '.tmp/fonts'
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
                dest: '.tmp/fonts'
                destCss: 'scss/clank/icon-fonts'
                options:
                    font: 'ios-icons'
                    hashes: false
                    htmlDemo: false
                    stylesheet: 'scss'
                    relativeFontPath: '../fonts'
                    template: 'font-generation-templates/custom-ios.css'

        # Copy the fonts and css in place, because Jekyll deletes them if we
        # generate in the output folder directly.
        copy:
            fonts:
                files: [
                    expand: true
                    dot: true
                    cwd: '.tmp/'
                    dest: '_site/'
                    src: '*/*'
                ]

        compass:
            dist:
                options:
                    sassDir: 'scss'
                    require: 'susy'
                    cssDir: '.tmp/css'

        jekyll:
            dist:
                options:
                    dest: '_site'

        connect:
            livereload:
                options:
                    port: 4200
                    hostname: '0.0.0.0'
                    middleware: (connect) ->
                        return [
                            require('connect-livereload')({ port: 35728 })
                            mountFolder(connect, '_site')
                        ]

        open:
            server:
                url: 'http://localhost:4200'

    @renameTask 'watch', 'doWatch'

    @registerTask('watch', ['connect', 'build', 'open', 'doWatch'])
    @registerTask('build', ['clean', 'webfont', 'jekyll', 'compass', 'copy', 'clean:afterjekyll'])
    @registerTask('default', ['build'])
