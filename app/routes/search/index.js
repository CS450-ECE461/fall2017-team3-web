import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //get users from user data model
    return this.get ('store').findAll ('user');
  }
});
