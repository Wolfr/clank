###
  Grunt workflow: for Compass & Webfonts
###

mountFolder = (connect, dir) ->
    return connect.static(require('path').resolve(dir))

module.exports = (grunt) ->
    @loadNpmTasks('grunt-contrib-compass')
    @loadNpmTasks('grunt-contrib-copy')
    @loadNpmTasks('grunt-contrib-watch')
    @loadNpmTasks('grunt-webfont')

    @initConfig
        doWatch:
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
            dist:
                options:
                    sassDir: 'scss'
                    cssDir: 'css'

    @renameTask 'watch', 'doWatch'

    @registerTask('watch', ['build', 'doWatch'])
    @registerTask('build', ['webfont', 'compass'])
    @registerTask('default', ['build'])