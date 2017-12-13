
import Gatekeeper from 'ember-cli-gatekeeper';
import DS from 'ember-data';

export default DS.RESTAdapter.extend ({
  host: 'http://localhost:5000'
});
