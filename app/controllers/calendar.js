import Ember from 'ember';


export default Ember.Controller.extend ({
  occurrences: Ember.A(),

  actions: {
    // add event to the calendar
    calendarAddOccurrence: function (occurrence) {
      this.get('occurrences').pushObject(Ember.Object.create({
        title: occurrence.get('title'),
        startsAt: occurrence.get('startsAt'),
        endsAt: occurrence.get('endsAt')
      }));
    },

    // update an already existing calendar event
    calendarUpdateOccurrence: function (occurrence, properties) {
      occurrence.setProperties(properties);
    },

    // remove an already existing calendar event
    calendarRemoveOccurrence: function (occurrence) {
      this.get('occurrences').removeObject(occurrence);
    }
  }
});
