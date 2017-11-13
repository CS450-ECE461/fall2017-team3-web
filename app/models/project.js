import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  skills: DS.attr('array'),
  owner : DS.attr('string'),
  status: DS.attr(),
  collaborators: DS.attr('array'),
  image: DS.attr()
});
