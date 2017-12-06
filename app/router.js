import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-in');
  this.route('profile');
  this.route('search', function() {
    this.route('profile', { path: 'user/:user_id'});
    this.route('project', { path: 'project/:project_id'});
  });
  this.route('calendar');
  this.route('new-user');
  this.route('messages');
  this.route('loading');
});

export default Router;
