import Ember from 'ember';

export default Ember.Controller.extend({
  isLoginRoute: Ember.computed('currentRouteName', {
    get() {
      return this.get('currentRouteName') === 'sign-in';
    }
  })
});
