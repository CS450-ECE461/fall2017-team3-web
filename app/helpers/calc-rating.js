import Ember from 'ember';

export function calcRating(params) {
  var sum = 0;

  params[0].forEach(function(unit) {
    sum+=unit;
  });
  return (sum / (params[0].length));
}
export default Ember.Helper.helper(calcRating);
