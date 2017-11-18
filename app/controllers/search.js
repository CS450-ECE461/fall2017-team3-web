import Ember from 'ember';

export default Ember.Controller.extend({
  arrowValue: "keyboard-arrow-down",

  actions: {
    search(param, type) {
      if (param !== '') {
        this.set("results", this.get('store').query(type, {skills: param }));
      } else {
        this.set("results", this.get('store').query(type, {skills: 'undefined'}));
      }
    },

    toggleShowToggle(){
      if (this.get("arrowValue") == "keyboard-arrow-down") {
        this.set("arrowValue", "keyboard-arrow-up")
        this.set("showToggle", true);
      }
      else {
        this.set("arrowValue", "keyboard-arrow-down")
        this.set("showToggle", false);
      }
    }
  }
});
