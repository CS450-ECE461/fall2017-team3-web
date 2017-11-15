import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterBySkill(param) {
      if (param !== '') {
        return this.get('store').query('user', {skills: param });
      } else {
        return this.get('store').query('user', {skills: 'undefined'});
      }
    },

    filterByProject(param) {
      if (param !== '') {
        return this.get('store').query('project', {skills: param});
      } else {
        return this.get('store').query('project', {skills: 'undefined'});
      }
    }
  }
});
