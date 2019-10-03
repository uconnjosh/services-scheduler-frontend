import DS from 'ember-data';
import EmberObject, { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  duration: DS.attr(),
  description: DS.attr(),
  images: DS.attr(),
  occurrences: DS.hasMany('occurrence', {async: false}),

  listTitle: computed('title', 'duration', function() {
    return `${this.title} | ${this.duration}`
  })
});
