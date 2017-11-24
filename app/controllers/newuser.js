import Ember from 'ember';

export default Ember.Controller.extend({
  firstPage: true,
  secondPage: false,
  thirdPage: false,
  fourthPage: false,

  actions: {
    toNextPage() {
      if(this.get("firstPage")) {
        this.set("firstPage", false);
        this.set("secondPage", true);
      } else if(this.get("secondPage")) {
        this.set("secondPage", false);
        this.set("thirdPage", true)
      } else if(this.get("thirdPage")) {
        this.set("thirdPage", false);
        this.set("fourthPage", true)
      }
    },

    saveUser() {
      let store = this.get('store');
      store.createRecord('user', {
        id: this.email,
        type: "user",
        name: this.name,
        rating: [5],
        skills: this.skills,
        email: this.email,
        phone: this.phone,
        description: this.description,
        image: 'http://lorempixel.com/400/200',
        projects: [],
      }).save();
    }
  }
});
