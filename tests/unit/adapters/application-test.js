import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  this.register('service:gatekeeper', Ember.Service.extend({
    //injecting the gatekeeper service
  }));
  let adapter = this.subject();
  assert.ok(adapter);
});
