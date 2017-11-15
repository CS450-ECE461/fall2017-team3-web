import Ember from 'ember';

export function calcRating(params) {

  let arr = params[0];
  let sum = 0;

  if(arr.length === 0) {
    return 0;
  } else {
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum/arr.length;
}
export default Ember.Helper.helper(calcRating);
