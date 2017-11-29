import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('project', params.project_id);
  },

  setupController(controller, model) {
    controller.set('project', model);
    this.store.findAll('user').then(function(users) {
      controller.set('users', users);
    });
  }
});
