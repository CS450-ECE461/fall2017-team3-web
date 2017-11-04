import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterBySkill(param) {
      if (param !== '') {
        return this.get('store').query('user', { name: param });
      } else {
        return this.get('store').findAll('user');
      }
    }
  }
});
