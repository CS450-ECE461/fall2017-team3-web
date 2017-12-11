import Ember from 'ember';

export default Ember.Component.extend ({
  // List Filter component for user and project search
  className: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
  },

  // Filter by user input
  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  }
});
