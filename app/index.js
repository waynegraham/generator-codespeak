'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var CodespeakGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Codespeak generator!'));

    var prompts = [
      {
        name: 'projectName',
        message: 'What is the name of your repo?',
        default: 'codespeak'
      },
      {
        name: 'description',
        message: ''
      }
    ];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('_layouts');
    this.mkdir('images');
    this.mkdir('javascripts');
    this.mkdir('stylesheets');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_config.yml', 'config.yml');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('Gemfile', 'Gemfile');
    this.copy('_README.md', 'README.md');

    this.copy('index.html', 'index.html');
    this.copy('humans.txt', 'humans.txt');

    this.copy('_layouts/default.html', '_layouts/default.html');
    this.copy('_layouts/post.html', '_layouts/post.html');

    this.copy('images/bethany-nowviskie.jpg', 'images/bethany-nowviskie.jpg');
    this.copy('images/eric-rochester.jpg', 'images/eric-rochester.jpg');
    this.copy('images/jeremy-boggs.jpg', 'images/jeremy-boggs.jpg');
    this.copy('images/scott-bailey.jpg', 'images/scott-bailey.jpg');
    this.copy('images/sic-logo.png', 'images/sic-logo.png');
    this.copy('images/wayne-graham.jpg', 'images/wayne-graham.jpg');

    this.copy('javascripts/jquery.min.js', 'javascripts/jquery.min.js');
    this.copy('javascripts/modernizr.min.js', 'javascripts/modernizr.min.js');
    this.copy('javascripts/respond.min.js', 'javascripts/respond.min.js');

    this.copy('stylesheets/style.scss', 'stylesheets/style.scss');

  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = CodespeakGenerator;
