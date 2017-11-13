import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return (Ember.typeOf(serialized) == "array") ? serialized : [];
  },

  serialize: function(deserialized) {
    if (Ember.isArray(deserialized)) {
      return Ember.A(deserialized);
    } else {
      return Ember.A();
    }
  }
});
