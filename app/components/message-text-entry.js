import Ember from 'ember';
import io from 'socket.io.js'

export default Ember.Component.extend({
  actions: {

    sendMessage() {

      let theMessage = Ember.$(".edit-text").val();
      this.set("message", theMessage);
    }
  }
});
