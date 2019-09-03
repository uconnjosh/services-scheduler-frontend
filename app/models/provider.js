import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	firstName: DS.attr(),
	lastName: DS.attr(),
	bio: DS.attr(),
	images: DS.attr()
});
