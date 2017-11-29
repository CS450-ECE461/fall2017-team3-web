import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr(),
  rating: DS.attr(),
  averageRating: computed('rating', function() {
    let arr = this.get('rating');
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum/arr.length;
  }),
  skills: DS.attr(),
  email: DS.attr(),
  image: DS.attr(),
  projects: DS.attr()
});
