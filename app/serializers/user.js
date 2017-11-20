import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments);
    return {
      type: 'user',
      id: json.data.id,
      attributes: json.data.attributes
    }
  }
});
