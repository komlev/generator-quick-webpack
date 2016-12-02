'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-quick-webpack') + ' generator!'
    ));
  },

  writing: function () {
    var files = [
      'index.html',
      'index.js',
      'package.json',
      'webpack.config.js',
      'yarn.lock'
    ]

    for (var i = 0; i < files.length; i++) {
      this.fs.copy(
        this.templatePath(files[i]),
        this.destinationPath(files[i])
      )
    }
  },

  install: function () {
    this.installDependencies();
  }
});
