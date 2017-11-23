import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search', function() {
    this.route('profile', { path: '/users/:user_id'});
    this.route('project', { path: '/projects/:project_id'});
  });
  this.route('messages');
});

export default Router;
