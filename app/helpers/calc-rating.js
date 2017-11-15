import Ember from 'ember';

export function calcRating(params) {

  let arr = params[Object.keys(params)[0]];
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum/arr.length);
}
export default Ember.Helper.helper(calcRating);
