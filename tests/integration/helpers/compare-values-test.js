
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('compare-values', 'helper:compare-values', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('1234', '1234');

  this.render(hbs`{{compare-values inputValue}}`);

  assert.equal(this.$().text().trim(), 'true');
});

