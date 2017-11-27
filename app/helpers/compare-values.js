import Ember from 'ember';

export function compareValues(params) {
  let [value1, value2] = params;
  return (value1==value2);
}

export default Ember.Helper.helper(compareValues);
