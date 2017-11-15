import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  rating: DS.attr(),
  skills: DS.attr(),
  email: DS.attr('string'),
  image: DS.attr(),
  projects: DS.attr('array')
});
