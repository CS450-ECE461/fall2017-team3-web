import DS from 'ember-data';

export default DS.Model.extend ({
  title: DS.attr(),
  name: DS.attr(),
  description: DS.attr(),
  skills: DS.attr(),
  owner : DS.attr(),
  active: DS.attr(),
  collaborators: DS.attr(),
  image: DS.attr()
});
