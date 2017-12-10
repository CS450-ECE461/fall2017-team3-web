import Ember from 'ember';

export default Ember.Controller.extend ({
  firstPage: true,
  secondPage: false,
  thirdPage: false,
  fourthPage: false,

  actions: {
    toNextPage () {
      if (this.get ("firstPage")) {
        this.set ("firstPage", false);
        this.set ("secondPage", true);

      } else if (this.get ("secondPage")) {
        this.set ("secondPage", false);
        this.set ("thirdPage", true)

      } else if (this.get ("thirdPage")) {
        this.set ("thirdPage", false);
        this.set ("fourthPage", true)
      }
    },

    saveUser () {
      let store = this.get ('store');
      store.createRecord ('user', {
        id: this.email,
        name: this.name,
        rating: [5],
        skills: this.skills.split(","),
        email: this.email,
        password: this.password,
        phone: this.phone,
        description: this.description,
        image: '/assets/images/profile.png',
        projects: [],
        portfolio: this.portfolio
      }).save();
      this.transitionToRoute("sign-in");
    }
  }
});
