import DS from 'ember-data';

export default DS.RESTAdapter.extend.extend({
  namespace: 'api'
});
