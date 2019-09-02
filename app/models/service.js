import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	title: DS.attr(),
	duration: DS.attr(),
	description: DS.attr(),
	images: DS.attr(),
});
