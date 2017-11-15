import Ember from 'ember';

export function calcRating(params) {
  let sum = 0;
  let i = 0;

  for(i = 0; i < params[0].length; i++) {
    sum+=params[0][i];
  }
  return sum/params[0].length;
}
export default Ember.Helper.helper(calcRating);
