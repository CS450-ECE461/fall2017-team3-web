import Ember from 'ember';

export default Ember.Controller.extend({
  arrowValue: "keyboard-arrow-down",
  toggleValue: false,

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
    },

    toggleSwitch(){
      this.toggleProperty("toggleValue");
      if (this.get("toggleValue")){
        var type = "project";
      } else {
        type = "user";
      }
      this.send("search", this.get("searchParam"), type);
    }
  }
});
