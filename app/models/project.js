import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  skills: DS.attr(),
  owner : DS.attr(),
  status: DS.attr(),
  collaborators: DS.attr(),
  image: DS.attr()
});
