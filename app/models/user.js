import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  rating: DS.attr(),
  skills: DS.attr(),
  email: DS.attr(),
  image: DS.attr(),
  projects: DS.attr()
});
