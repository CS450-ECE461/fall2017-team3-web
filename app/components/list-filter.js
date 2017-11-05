import Ember from 'ember';

export default Ember.Component.extend({
  className: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  }

});

