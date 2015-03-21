import Ember from 'ember';

Ember.Handlebars.registerHelper("asset-path", function(name) {
  var path;
  path = window.ASSETS.path(name);
  return new Ember.Handlebars.SafeString(path);
});

export default undefined;
