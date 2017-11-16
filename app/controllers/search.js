import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search(param, type) {
      if (param !== '') {
        this.set("results", this.get('store').query(type, {skills: param }));
      } else {
        this.set("results", this.get('store').query(type, {skills: 'undefined'}));
      }
    }
  }
});
