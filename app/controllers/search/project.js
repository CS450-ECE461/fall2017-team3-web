import Ember from 'ember';

export default Ember.Controller.extend ({
  // project search filtering
  actions: {
    filterById (param){
      if (param !== '') {
        return this.get('store').findRecord('project', param.id);

      } else {
        return this.get('store').findRecord('project', {id: 'undefined'});
      }
    }
  }
});
