import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    saveFirstPage(){
      let store = this.get('store');
      let user = store.createRecord('user', {
        id: this.email,
        type: "user",
        name: this.name,
        rating: [5],
        skills: ['default'],
        email: this.email,
        phone: this.phone,
        description: '',
        image: 'http://lorempixel.com/400/200',
        projects: [],
      });

      user.save();
    }
  }
});
