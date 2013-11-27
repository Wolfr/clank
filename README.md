# Clank README

## What is Clank?

Clank is an open source HTML/CSS prototyping framework for tablet and smartphone apps. Think of it as Twitter Bootstrap but for prototyping native apps.

## Demos

[View the demos](http://getclank.com/demos/)

## How to use


Depending on your HTML/CSS skill level you can choose to use the Clank CSS files as "standalone" assets and build your prototype with HTML only. Refer to [getclank.com](http://getclank.com/) for documentation on which markup and CSS classes to use.

This repository provides a sample config.rb to work with [Compass](http://compass-style.org/) - you can run `compass` watch and the SCSS will compile to CSS.

If you want to take things a bit further (SCSS generation + icon font generation) do the following:

* Make sure you have [bower](https://github.com/bower/bower) and [grunt](http://gruntjs.com/) set up.
* Run `npm install` and `bower install` to install the necessary dependencies.
* Run `grunt watch` to watch for SCSS changes and to generate the icon fonts.

For a full workflow for making a prototype and documenting it you can use the [Clank-Jekyll](https://github.com/Wolfr/clank-jekyll) project.

## Acknowledgements

Clank was inspired and uses parts of [Ratchet](http://maker.github.io/ratchet/).

## Contributing

Open a [Github issue](https://github.com/Wolfr/clank/issues) if you have any feedback or ideas.

