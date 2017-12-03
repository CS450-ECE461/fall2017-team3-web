import Ember from 'ember';

export default Ember.Controller.extend({
  isLoginOrRegisterRoute: Ember.computed('currentRouteName', {
    get() {
      return this.get('currentRouteName') === 'sign-in' || this.get('currentRouteName') === 'new-user';
    }
  })
});
