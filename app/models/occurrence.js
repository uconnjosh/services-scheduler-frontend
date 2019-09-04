import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	service: DS.belongsTo('service'),
	providers: DS.hasMany('provider'),
	consumers: DS.hasMany('consumer'),
	slots: DS.attr(),
});
