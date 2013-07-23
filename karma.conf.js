module.exports = function(karma) {
  karma.configure({
    basePath: '',

    files: [
      "vendor/bundle/gems/jquery-rails-3.0.4/vendor/assets/javascripts/jquery.min.js",
      "vendor/bundle/gems/handlebars-source-1.0.12/dist/handlebars.js",
      "vendor/bundle/gems/ember-source-1.0.0.rc6.2/dist/ember.js",
      "vendor/assets/javascripts/ember-data-latest.js",
      "bower_components/jquery-mockjax/jquery.mockjax.js",
      "app/assets/javascripts/*.js",
      "app/assets/javascripts/**/*.js",
      "app/assets/javascripts/templates/*.handlebars",
      "spec/javascripts/*.js"
      ],

    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,

    frameworks: ["qunit"],

    plugins: [
      'karma-qunit',
      'karma-chrome-launcher',
      'karma-ember-preprocessor',
      'karma-phantomjs-launcher'
      ],

    preprocessors: {
      "app/javascriptes/templates/*.handlebars": 'ember'
    }
  });
};
