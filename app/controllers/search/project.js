import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterById (param) {
      if (param !== '') {
        return this.get('store').findRecord('user', param.id);
      } else {
        return this.get ('store').findRecord ('user', {id: 'undefined'});
      }
    }
  }
});
