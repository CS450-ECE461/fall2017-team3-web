import DS from 'ember-data';

export default DS.Model.extend({
  participants: DS.attr(),
  messages: DS.attr()
});
